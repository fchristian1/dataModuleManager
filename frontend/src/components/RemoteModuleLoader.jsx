import React from "react";
import { lazyModules } from "./lazyLoading/_lazyModules";

export const RemoteModuleLoader = ({ module }) => {
  const importer = lazyModules[module];

  if (!importer) return <div>Modul nicht gefunden: {module}</div>;

  const LazyComponent = React.lazy(importer);

  return (
    <React.Suspense fallback={<div>Wird geladen...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
};
