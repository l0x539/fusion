'use client'

import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit"

type Action<T> = {
  type: string;
  payload: T;
}

export interface MenuState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  scrollHintBottom: boolean;
  projectTab: 0 | 1 | 2 | 3;
};

const initialState: MenuState = {
  isMenuOpen: false,
  isScrolled: true,
  scrollHintBottom: false,
  projectTab: 0
};

const appSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    togleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, {payload}: Action<boolean>) => {
      state.isMenuOpen = payload;
    },
    setScrollBottomHint: (state, {payload}: Action<boolean>) => {
      state.scrollHintBottom = payload;
    },
    setScrolled: (state, {payload}: Action<boolean>) => {
      state.isScrolled = payload;
    },
    setProjectTab: (state, {payload}: Action<0|1|2|3>) => {
      state.projectTab = payload;
    }
  }
});

export const {
  openMenu,
  closeMenu,
  togleMenu,
  setMenuOpen,
  setScrollBottomHint,
  setScrolled,
  setProjectTab
} = appSlice.actions;

export const selectApp = (state: AppState) => state.app;

export default appSlice.reducer;