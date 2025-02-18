# React 18+ Strict Mode Infinite Loop in useEffect

This repository demonstrates a subtle bug that can occur in React 18 and later versions when using the `useEffect` hook within `StrictMode`.  Strict mode helps detect potential issues, and in this case, it highlights a common mistake:

Modifying state within the `useEffect` dependency array can lead to infinite re-renders.

## Bug Description

The provided `MyComponent` function contains a `useEffect` hook that attempts to increment the state variable `count` within its own dependency array. This creates an infinite loop because each state update triggers another render, which in turn triggers the `useEffect` again.

## Solution

The solution involves making sure not to modify the state with the dependency on the state.  The best solution depends on the desired functionality.