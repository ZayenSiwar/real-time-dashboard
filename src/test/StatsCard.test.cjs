const { render, screen } = require('@testing-library/react');
const StatsCard = require('../components/StatsCard').default;

describe('StatsCard Component', () => {
  const defaultProps = {
    operational: 72,
    warning: 4,
    incident: 1,
  };

  it('renders all stats correctly', () => {
    render(<StatsCard {...defaultProps} />);
    
    expect(screen.getByText('72')).toBeInTheDocument();
    expect(screen.getByText('Operational')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Incident')).toBeInTheDocument();
  });

  it('handles zero values correctly', () => {
    render(<StatsCard operational={0} warning={0} incident={0} />);
    
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getAllByText('0')).toHaveLength(3);
  });

  it('handles large numbers correctly', () => {
    render(<StatsCard operational={9999} warning={888} incident={77} />);
    
    expect(screen.getByText('9999')).toBeInTheDocument();
    expect(screen.getByText('888')).toBeInTheDocument();
    expect(screen.getByText('77')).toBeInTheDocument();
  });
});
