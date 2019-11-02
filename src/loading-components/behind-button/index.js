import React, { useState, useTransition, Suspense } from "react";
import Button, { ButtonGroup } from "@atlaskit/button";
import { ModalTransition } from "@atlaskit/modal-dialog";
import Flag, { FlagGroup } from "@atlaskit/flag";
import LazyComponent from "./lazy-component";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutMs, setTimeoutMs] = useState(0);
  const [startTransition, isPending] = useTransition({
    timeoutMs
  });

  return (
    <>
      <div>
        <h2>Transition Timeout</h2>
        <p>
          This is the timeout the transition will take before transitioning to
          the next step (in our case the Suspense <code>fallback</code>).
        </p>

        <ButtonGroup>
          {[0, 1, 1000, 2000].map(timeout => (
            <Button
              key={timeout}
              isSelected={timeoutMs === timeout}
              onClick={() => setTimeoutMs(timeout)}
            >
              {timeout === 0 ? "Auto" : timeout}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <h2>Open Lazy Modal</h2>
      <p>You'll have to refresh after loading to clear the cache.</p>

      <Suspense
        key={timeoutMs}
        fallback={
          <>
            <FlagGroup>
              <Flag icon="😬" appearance="info" title="Taking a while..." />
            </FlagGroup>
            <Button isLoading>Open</Button>
          </>
        }
      >
        <ModalTransition>
          {isOpen && <LazyComponent onClose={() => setIsOpen(false)} />}
        </ModalTransition>

        <Button
          isLoading={isPending}
          onClick={() => startTransition(() => setIsOpen(!isOpen))}
        >
          Open
        </Button>
      </Suspense>
    </>
  );
};
