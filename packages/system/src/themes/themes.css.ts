import { createTheme, createThemeContract } from "@vanilla-extract/css"
import { angularColorPalette } from "./angular-color-scheme"
import { qwikColorPalette } from "./qwik-color-scheme"
import { landingColorPalette } from "./landing-color-scheme"
import { reactColorPalette } from "./react-color-scheme"
import {
	blankPalette,
	darkThemeFromPalette,
	lightThemeFromPalette,
} from "./theme-from-palette"
import { vueColorPalette } from "./vue-color-scheme"

export const vars = createThemeContract(lightThemeFromPalette(blankPalette))

export const reactTheme = createTheme(
	vars,
	lightThemeFromPalette(reactColorPalette)
)

export const reactThemeDark = createTheme(
	vars,
	darkThemeFromPalette(reactColorPalette)
)

export const angularTheme = createTheme(
	vars,
	lightThemeFromPalette(angularColorPalette)
)

export const angularThemeDark = createTheme(
	vars,
	darkThemeFromPalette(angularColorPalette)
)

export const vueTheme = createTheme(
	vars,
	lightThemeFromPalette(vueColorPalette)
)

export const vueThemeDark = createTheme(
	vars,
	darkThemeFromPalette(vueColorPalette)
)

export const qwikTheme = createTheme(
	vars,
	lightThemeFromPalette(qwikColorPalette)
)

export const qwikThemeDark = createTheme(
	vars,
	darkThemeFromPalette(qwikColorPalette)
)

export const landingTheme = createTheme(
	vars,
	lightThemeFromPalette(landingColorPalette)
)

export const derivedAttributes = {
	outline: `2px solid ${vars.themeColors.tertiary}`,
}
