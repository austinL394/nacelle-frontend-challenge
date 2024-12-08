// PageLayout.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import PageLayout from '../PageLayout';

// Mock useLocation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/notifications'
  })
}));

describe('PageLayout Component', () => {
  const defaultProps = {
    title: 'Test Title',
    children: <div>Test Content</div>
  };

  const renderWithRouter = (component: React.ReactNode, initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path="*" element={component} />
        </Routes>
      </MemoryRouter>
    );
  };

  // Test 1: Basic Rendering
  it('renders title and content correctly', () => {
    renderWithRouter(<PageLayout {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  // Test 2: Description Rendering
  it('renders description when provided', () => {
    renderWithRouter(
      <PageLayout {...defaultProps} description="Test Description" />
    );
    
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  // Test 3: No Description
  it('does not render description when not provided', () => {
    renderWithRouter(<PageLayout {...defaultProps} />);
    
    const descriptions = screen.queryByText('Test Description');
    expect(descriptions).not.toBeInTheDocument();
  });

  // Test 4: Navigation Links
  it('renders navigation links', () => {
    renderWithRouter(<PageLayout {...defaultProps} />);
    
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Modal')).toBeInTheDocument();
  });

  // Test 5: Active Link Styling
  it('applies correct styling to active link', () => {
    renderWithRouter(<PageLayout {...defaultProps} />, '/notifications');
    
    const notificationsLink = screen.getByText('Notifications').closest('a');
    const modalLink = screen.getByText('Modal').closest('a');
    
    expect(notificationsLink).toHaveClass('bg-gray-100', 'text-gray-900');
    expect(modalLink).toHaveClass('text-gray-600');
  });

  // Test 6: Children Rendering in Main Content
  it('renders children in main content area', () => {
    const testContent = <div data-testid="test-content">Special Content</div>;
    renderWithRouter(
      <PageLayout {...defaultProps} children={testContent} />
    );
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  // Test 7: Layout Structure
  it('has correct layout structure', () => {
    renderWithRouter(<PageLayout {...defaultProps} />);
    
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument();
    expect(document.querySelector('.max-w-7xl')).toBeInTheDocument();
  });

  // Test 8: Link Destinations
  it('has correct link destinations', () => {
    renderWithRouter(<PageLayout {...defaultProps} />);
    
    const notificationsLink = screen.getByText('Notifications').closest('a');
    const modalLink = screen.getByText('Modal').closest('a');
    
    expect(notificationsLink).toHaveAttribute('href', '/notifications');
    expect(modalLink).toHaveAttribute('href', '/modal');
  });
});