"use client";

import { useEffect, useState, useCallback } from "react";

const activities = [
  "excitedly applying Go generics",
  "arguing with the TypeScript compiler",
  "refactoring middleware for the 4th time",
  "adding context.Context to everything",
  "explaining goroutines at parties",
  "npm installing the entire internet",
  "debugging with console.log and prayers",
  "over-engineering a todo app",
  "deleting node_modules again",
  "wrapping errors in Go, respectfully",
  "hot-reloading for the 47th time",
  "optimising re-renders nobody noticed",
  "reading the Go proverbs unironically",
  "implementing graceful shutdown, again",
  "blindly trusting Stack Overflow answers",
  "writing tests after the PR is approved",
  "deploying on a Friday afternoon",
  "migrating to the newest React router",
  "adding eslint rules then ignoring them",
  "benchmarking code that runs once a day",
  "fighting with CORS in development",
  "implementing outrageously complex log cryptography then losing the keys",
  "debugging CrashLoopBackOff at 2am",
  "explaining to finance why we need more nodes",
  "adding dependencies to fix dependency issues",
  "renaming things for the 3rd time today",
  "asking AI to write all the tests",
  "automating a task that takes 30 seconds",
  "reading docs after the code doesn't work"
];

export default function TerminalStatus() {
  const [displayed, setDisplayed] = useState("");
  const [activityIndex, setActivityIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">(
    "typing"
  );

  const getShuffledActivities = useCallback((): string[] => {
    return [...activities].sort(() => Math.random() - 0.5);
  }, []);

  const [shuffled, setShuffled] = useState<string[]>([]);

  useEffect(() => {
    setShuffled(getShuffledActivities());
  }, [getShuffledActivities]);

  useEffect(() => {
    if (shuffled.length === 0) return;

    const current = shuffled[activityIndex % shuffled.length];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          40 + Math.random() * 40
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("holding"), 2000);
      return () => clearTimeout(timeout);
    }

    if (phase === "holding") {
      setPhase("erasing");
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          20
        );
        return () => clearTimeout(timeout);
      }
      const nextIndex = activityIndex + 1;
      if (nextIndex % shuffled.length === 0) {
        setShuffled(getShuffledActivities());
      }
      setActivityIndex(nextIndex);
      setPhase("typing");
    }
  }, [
    displayed,
    phase,
    activityIndex,
    shuffled,
    getShuffledActivities,
  ]);

  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-cyan/60">&gt;</span>
      <span className="whitespace-nowrap">
        {displayed}
        <span className="inline-block w-[2px] h-[1.1em] bg-cyan align-middle ml-px animate-pulse-glow" />
      </span>
    </span>
  );
}
