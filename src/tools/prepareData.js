export default function prepareData(cropData, logoColors, mirColors, logoMinimization, logoSide)
{
    const colors = {
      pink: "#ff0078",
      grey: "#f3f4f4",
      white: "#ffffff",
      dark: "#323e48",
      none: "none",
      default: "default",
    }

    return {
        cropData: cropData,
        logoColors: {
            bg: colors[logoColors.bg],
            letter: colors[logoColors.letter],
            text: colors[logoColors.text],
        },
        mirColors: {
            main: colors[mirColors.main],
            bg: colors[mirColors.bg],
        }, 
        logoMinimization: logoMinimization, 
        logoSide: logoSide
    }
}