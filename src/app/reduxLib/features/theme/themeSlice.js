import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: true,
    themeColor: {
        "bgColor1" : "bg-black",
        "bgColor2" : "bg-[#111111]",
        "textColor1" : "text-white",
        "fromColor" : "from-black",
        "viaColor" : "via-black",
    }
  },
  reducers: {
    toggleTheme: (state) => {

        state.darkMode = !state.darkMode

        switch (state.darkMode) {

            case true:
                state.themeColor.bgColor1 = "bg-black"
                state.themeColor.bgColor2 = "bg-[#111111]"
                state.themeColor.textColor1 = "text-white"
                state.themeColor.fromColor = "from-black"
                state.themeColor.viaColor = "from-black"
                state.themeColor.viaColor = "via-black"
                break;

            case false:
                state.themeColor.bgColor1 = "bg-[#f2f2f2]"
                state.themeColor.bgColor2 = "bg-white"
                state.themeColor.textColor1 = "text-black"
                state.themeColor.fromColor = "from-[#f2f2f2]"
                state.themeColor.viaColor = "via-[#f2f2f2]"
                break;
        
            default:
                break;
        }
    }
  }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer