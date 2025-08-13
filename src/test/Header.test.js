import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the correct dashboard title', () => {
    render(<Header />);
    expect(screen.getByText('Real-Time Ops Dashboard')).toBeInTheDocument();
  });

  it('has the correct heading level', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Real-Time Ops Dashboard');
  });

  it('displays greeting message', () => {
    render(<Header />);
    expect(screen.getByText('Bonjour, Admin')).toBeInTheDocument();
  });

  it('renders avatar image', () => {
    render(<Header />);
    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://i.pravatar.cc/40');
    expect(avatar).toHaveClass('w-9 h-9 rounded-full');
  });

  it('has correct styling classes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-gray-800 p-4 border-b border-gray-700');
  });

  it('has flex layout for content', () => {
    render(<Header />);
    const container = screen.getByText('Real-Time Ops Dashboard').parentElement;
    expect(container).toHaveClass('flex items-center justify-between');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
