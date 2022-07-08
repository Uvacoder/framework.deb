import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { pxToRem } from '../../util/style-utils'

export const contributorBannerStyle = style([
	sprinkles({
		backgroundColor: 'secondaryContainer',
		padding: { mobile: 32, tablet: 56 },
		borderRadius: 12,
		gap: { mobile: 32, tablet: 16 },
		display: {
			mobile: 'flex',
			tablet: 'grid',
		},
		flexDirection: 'column',
		alignItems: 'center',
	}),
	{
		gridTemplateColumns: '1fr min-content min-content',
	},
])

export const contributorImageStyle = style([
	sprinkles({ borderColor: 'onSecondaryContainer' }),
	{
		maxWidth: pxToRem(72),
		borderRadius: '50%',
		borderWidth: pxToRem(4),
		borderStyle: 'solid',
		selectors: {
			'& + &': {
				marginLeft: pxToRem(-14),
			},
		},
	},
])
