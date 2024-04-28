/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext();

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // Replace with your own API call to
      const response = await featureFlagsDataServiceCall();
      setEnableFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error.meaage);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
