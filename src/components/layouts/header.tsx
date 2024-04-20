import Logo from '@/components/layouts/logo'
import { NavMenu } from '@/components/layouts/nav-menu'
import ThemeToggle from '@/components/layouts/theme-toggle'

import { AccountButton } from './account-button'

export const Header: React.FC = () => {

  return (
    <header className="flex w-full justify-between gap-5">
      <div className="flex items-center">
        <Logo />
        <div className="px-1">
          <NavMenu />
        </div>
      </div>
      <div className="flex items-center justify-end px-5">
        <div className="px-1">
          <ThemeToggle />
        </div>
        <AccountButton />
      </div>
    </header>
  )
}
