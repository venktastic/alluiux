import React, { createContext, useState, useContext, useMemo } from 'react';
import { projects, themes, Project, AppTheme } from '../data/mockData';

interface AppContextType {
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
  currentProject: Project;
  themeId: string;
  setThemeId: (id: string) => void;
  currentTheme: AppTheme;
}

const AppContext = createContext<AppContextType>(null!);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [themeId, setThemeId] = useState(themes[0].id);

  const currentProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) || projects[0],
    [selectedProjectId]
  );

  const currentTheme = useMemo(
    () => themes.find((t) => t.id === themeId) || themes[0],
    [themeId]
  );

  return (
    <AppContext.Provider
      value={{
        selectedProjectId,
        setSelectedProjectId,
        currentProject,
        themeId,
        setThemeId,
        currentTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
