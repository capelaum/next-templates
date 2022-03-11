import { render, screen } from '@testing-library/react'
import { Something } from '.'

describe('<Something />', () => {
  it('should render the Something heading', () => {
    const { container } = render(<Something />)

    expect(
      screen.getByRole('heading', { name: /Something/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
