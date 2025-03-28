
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, Bell, LogIn, LogOut, User, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('You have been logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out. Please try again.');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary animate-leaf-sway" />
            <span className="font-bold text-xl text-primary">GreenWaste</span>
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              {user && (
                <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              )}
              <Link to="/eco-guide" className="text-foreground hover:text-primary transition-colors">
                Eco Guide
              </Link>
              {user && (
                <Link to="/scheduling" className="text-foreground hover:text-primary transition-colors">
                  Scheduling
                </Link>
              )}
              <Link to="/feedback" className="text-foreground hover:text-primary transition-colors">
                Feedback
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2">
            {user ? (
              <>
                {!isMobile && (
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Bell className="h-4 w-4" />
                  </Button>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}&background=22c55e&color=fff`} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    {isAdmin() && (
                      <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                        <UserCog className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => navigate('/scheduling')}>
                      <Bell className="mr-2 h-4 w-4" />
                      <span>My Collections</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button className="eco-button" onClick={() => navigate('/login')}>
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
            
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              {user && (
                <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                  Dashboard
                </Link>
              )}
              <Link to="/eco-guide" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Eco Guide
              </Link>
              {user && (
                <Link to="/scheduling" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                  Scheduling
                </Link>
              )}
              <Link to="/feedback" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Feedback
              </Link>
              
              {user && (
                <Button variant="outline" className="justify-start" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
