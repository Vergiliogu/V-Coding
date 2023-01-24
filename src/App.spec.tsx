import { render, screen } from '@testing-library/react'
import App from './App'

test("", () => {
    render(<App />)
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent("App")
})

export default null;