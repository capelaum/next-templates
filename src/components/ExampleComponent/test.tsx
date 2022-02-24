import { render, screen } from '@testing-library/react'

import { ExampleComponent } from '.'

describe('<ExampleComponent />', () => {
  it('should render the ExampleComponent heading', () => {
    const { container } = render(<ExampleComponent />)

    expect(
      screen.getByRole('heading', { name: /ExampleComponent/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
