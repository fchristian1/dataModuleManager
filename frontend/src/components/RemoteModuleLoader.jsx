// RemoteModuleLoader.jsx
import React from "react";
import { lazyModules } from "./lazyLoading/_lazyModules";

// In-Memory Cache
const moduleCache = {};

/**
 * Props:
 * - module: string
 * - reload: boolean (optional)
 */
export const RemoteModuleLoader = ({ module, reload = false }) => {
  const importer = lazyModules[module];

  if (!importer) return <div>Modul nicht gefunden: {module}</div>;

  // Wenn reload gesetzt ist, lösche den Cache für das Modul
  if (reload && moduleCache[module]) {
    delete moduleCache[module];
  }

  // Wenn noch nicht im Cache, dann lazy laden und speichern
  if (!moduleCache[module]) {
    moduleCache[module] = React.lazy(importer);
  }

  const LazyComponent = moduleCache[module];

  return (
    <React.Suspense fallback={<div>Wird geladen...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
};
