import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const InteractiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function InteractiveIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 15 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M5.7085 0.666748C5.87426 0.666748 6.03323 0.732596 6.15044 0.849806C6.26765 0.967016 6.3335 1.12599 6.3335 1.29175V3.37508C6.3335 3.54084 6.26765 3.69981 6.15044 3.81702C6.03323 3.93423 5.87426 4.00008 5.7085 4.00008C5.54274 4.00008 5.38376 3.93423 5.26655 3.81702C5.14934 3.69981 5.0835 3.54084 5.0835 3.37508V1.29175C5.0835 1.12599 5.14934 0.967016 5.26655 0.849806C5.38376 0.732596 5.54274 0.666748 5.7085 0.666748ZM1.72516 2.30841C1.84235 2.19137 2.0012 2.12563 2.16683 2.12563C2.33245 2.12563 2.49131 2.19137 2.6085 2.30841L4.06683 3.76675C4.12824 3.82397 4.17749 3.89297 4.21165 3.96963C4.24581 4.0463 4.26417 4.12906 4.26566 4.21298C4.26714 4.2969 4.2517 4.38026 4.22026 4.45808C4.18883 4.5359 4.14204 4.6066 4.08269 4.66595C4.02335 4.7253 3.95265 4.77208 3.87483 4.80352C3.797 4.83495 3.71365 4.85039 3.62973 4.84891C3.54581 4.84743 3.46305 4.82906 3.38638 4.7949C3.30971 4.76074 3.24071 4.71149 3.1835 4.65008L1.72516 3.19175C1.60812 3.07456 1.54238 2.91571 1.54238 2.75008C1.54238 2.58446 1.60812 2.4256 1.72516 2.30841ZM9.69183 2.30841C9.80887 2.4256 9.87461 2.58446 9.87461 2.75008C9.87461 2.91571 9.80887 3.07456 9.69183 3.19175L8.2335 4.65008C8.17628 4.71149 8.10728 4.76074 8.03061 4.7949C7.95394 4.82906 7.87118 4.84743 7.78726 4.84891C7.70335 4.85039 7.61999 4.83495 7.54216 4.80352C7.46434 4.77208 7.39365 4.7253 7.3343 4.66595C7.27495 4.6066 7.22816 4.5359 7.19673 4.45808C7.16529 4.38026 7.14986 4.2969 7.15134 4.21298C7.15282 4.12906 7.17119 4.0463 7.20535 3.96963C7.2395 3.89297 7.28876 3.82397 7.35016 3.76675L8.8085 2.30841C8.92568 2.19137 9.08454 2.12563 9.25016 2.12563C9.41579 2.12563 9.57464 2.19137 9.69183 2.30841ZM0.0834961 6.29175C0.0834961 6.12599 0.149344 5.96702 0.266554 5.84981C0.383765 5.7326 0.542736 5.66675 0.708496 5.66675H2.79183C2.95759 5.66675 3.11656 5.7326 3.23377 5.84981C3.35098 5.96702 3.41683 6.12599 3.41683 6.29175C3.41683 6.45751 3.35098 6.61648 3.23377 6.73369C3.11656 6.8509 2.95759 6.91675 2.79183 6.91675H0.708496C0.542736 6.91675 0.383765 6.8509 0.266554 6.73369C0.149344 6.61648 0.0834961 6.45751 0.0834961 6.29175ZM6.89766 6.07175C6.18516 5.46008 5.0835 5.96675 5.0835 6.90592V16.3009C5.0835 17.3092 6.32933 17.7859 7.00183 17.0343L9.18016 14.5984C9.41016 14.3417 9.7335 14.1901 10.0777 14.1759L13.2777 14.0476C14.2752 14.0076 14.7068 12.7651 13.9485 12.1142L6.8985 6.07175H6.89766ZM6.3335 15.9059V7.23425L12.8435 12.8142L10.0268 12.9267C9.68952 12.9404 9.35838 13.0216 9.05305 13.1656C8.74772 13.3096 8.47441 13.5135 8.24933 13.7651L6.3335 15.9059Z" />
			</svg>
		)
	}
)
