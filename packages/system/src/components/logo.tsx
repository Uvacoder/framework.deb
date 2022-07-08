import classnames from 'classnames'
import React from 'react'
import { AngularFrameworkIcon } from '../icons/angular-framework-icon'
import { FrameworkDevIcon } from '../icons/framework-dev-icon'
import { ReactFrameworkIcon } from '../icons/react-framework-icon'
import { VueFrameworkIcon } from '../icons/vue-framework-icon'
import { logoStyle } from './logo.css'

export type LogoProps = React.ComponentPropsWithoutRef<'div'> & {
	siteName?: string
	stretched?: boolean
}

export function Logo({ className, siteName, stretched }: LogoProps) {
	const frameworkLogos: { [key: string]: JSX.Element } = {
		react: <ReactFrameworkIcon size="full" stretched={stretched} />,
		angular: <AngularFrameworkIcon size="full" stretched={stretched} />,
		vue: <VueFrameworkIcon size="full" stretched={stretched} />,
	}

	const renderLogo = () => {
		if (siteName && frameworkLogos[siteName]) {
			return frameworkLogos[siteName]
		}

		return <FrameworkDevIcon size="full" />
	}

	return <div className={classnames(className, logoStyle)}>{renderLogo()}</div>
}
