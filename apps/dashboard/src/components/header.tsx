import { CommandMenu } from "@/components/command-menu";
import { Feedback } from "@/components/feedback";
import { Notifications } from "@/components/notifications";
import { UserMenu } from "@/components/user-menu";

export function Header() {
  return (
    <header className="border-b-[1px] flex justify-between py-4 mr-8">
      <CommandMenu />
      <div className="flex space-x-2">
        <Feedback />
        <Notifications />
        <UserMenu />
      </div>
    </header>
  );
}