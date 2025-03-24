import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; // Ensure proper imports for dropdown menu

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* You can add any content for your header here */}
        <div className="p-4 text-lg font-semibold text-blue-500">ISMOFY</div>
      </SidebarHeader>

      <SidebarContent>
        {/* Sidebar Groups */}
        <SidebarGroup>
          {/* Add links or content for groups */}
          <div className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</div>
          <div className="p-4 hover:bg-gray-700 cursor-pointer">Products</div>
          <div className="p-4 hover:bg-gray-700 cursor-pointer">Orders</div>
        </SidebarGroup>

        {/* Dropdown Menu inside the Sidebar */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="p-4 cursor-pointer hover:bg-gray-700">
              My Account
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Additional Sidebar Groups */}
        <SidebarGroup>
          <div className="p-4 hover:bg-gray-700 cursor-pointer">Customers</div>
          <div className="p-4 hover:bg-gray-700 cursor-pointer">Reports</div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {/* Footer Content */}
        <div className="p-4 text-sm text-gray-500">© 2025 ISMOFY</div>
      </SidebarFooter>
    </Sidebar>
  );
}
