import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const useFingerSprint = async () => {
  const fpPromise = await FingerprintJS.load();
  const fpPromiseGet = await fpPromise.get();
  const clientId = fpPromiseGet.visitorId;
  return clientId;
};
