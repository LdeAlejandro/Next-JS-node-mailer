export const VerificationToken = () => {
  const randomPart = Math.random().toString(36).substr(2);
  const timestampPart = Date.now().toString(36);
  return `${randomPart}-${timestampPart}`;
};


