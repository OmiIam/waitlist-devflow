import { useCallback, useMemo, useRef, useState } from 'react';

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

export interface WaitlistPayload {
  email: string;
  source?: string;
  metadata?: Record<string, unknown>;
}

interface WaitlistResult {
  ok: boolean;
  message: string;
  data?: unknown;
}

const getEnv = () => ({
  endpoint: (import.meta.env.VITE_WAITLIST_ENDPOINT as string | undefined)?.trim() ?? '',
  apiKey: (import.meta.env.VITE_WAITLIST_API_KEY as string | undefined)?.trim() ?? '',
});

export function useWaitlist() {
  const [{ endpoint, apiKey }] = useState(getEnv);
  const [status, setStatus] = useState<WaitlistStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const headers = useMemo(() => {
    const base: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (apiKey) {
      base.Authorization = `Bearer ${apiKey}`;
    }

    return base;
  }, [apiKey]);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setStatus('idle');
    setError(null);
  }, []);

  const submit = useCallback(
    async ({ email, source = 'landing', metadata = {} }: WaitlistPayload): Promise<WaitlistResult> => {
      if (!endpoint) {
        const message = 'Waitlist endpoint missing. Add VITE_WAITLIST_ENDPOINT to your env config.';
        setStatus('error');
        setError(message);
        return { ok: false, message };
      }

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setStatus('loading');
      setError(null);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            email,
            source,
            metadata,
            submittedAt: new Date().toISOString(),
          }),
          signal: controller.signal,
        });

        const body = await response.json().catch(() => null);

        if (!response.ok) {
          const message =
            (body && (body.message as string)) || 'Unable to join waitlist right now. Please try again.';
          throw new Error(message);
        }

        setStatus('success');
        return {
          ok: true,
          message: (body && (body.message as string)) || 'Thanks for joining the Devflow waitlist.',
          data: body,
        };
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return { ok: false, message: 'Cancelled' };
        }

        const message =
          err instanceof Error ? err.message : 'Unexpected error while joining the waitlist. Please retry.';
        setStatus('error');
        setError(message);
        return { ok: false, message };
      }
    },
    [endpoint, headers]
  );

  return {
    submit,
    status,
    error,
    reset,
  };
}
