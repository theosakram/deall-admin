export const removeKeyValueFromObject = (
  obj: Record<string, unknown>,
  keyToRemove: string
) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== keyToRemove)
  );
};
