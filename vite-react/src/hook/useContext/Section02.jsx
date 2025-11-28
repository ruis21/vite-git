import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function SecondSection() {

    const { isDark, setIsDark } = useContext(ThemeContext);
    console.log('모드:', isDark)

    return (

        <div className="content"
            style={
                {
                    backgroundColor: isDark ? '#243d4bff' : '#c6e6e3ff',
                    color: isDark ? '#fff' : '#333'
                }
            }>
            <h2>두번째 섹션</h2>
            <button onClick={() => setIsDark(!isDark)}>모드 전환 버튼</button>
        </div>
    )
}

export default SecondSection