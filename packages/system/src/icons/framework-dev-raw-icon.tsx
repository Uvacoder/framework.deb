import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const FrameworkDevRawIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function FrameworkDevRawIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="155"
				height="18"
				viewBox="0 0 155 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
                ref={ref}
				{...props}
                preserveAspectRatio="none"
			>
				<path
					d="M7.78125 5V7.5H0.375V5H7.78125ZM2.07031 17V4.13281C2.07031 3.26302 2.23958 2.54167 2.57812 1.96875C2.92188 1.39583 3.39062 0.966145 3.98437 0.679686C4.57813 0.393228 5.2526 0.249999 6.00781 0.249999C6.51823 0.249999 6.98438 0.289062 7.40625 0.367187C7.83333 0.445312 8.15104 0.515625 8.35938 0.578125L7.76563 3.07812C7.63542 3.03646 7.47396 2.9974 7.28125 2.96094C7.09375 2.92448 6.90104 2.90625 6.70312 2.90625C6.21354 2.90625 5.8724 3.02083 5.67969 3.25C5.48698 3.47396 5.39063 3.78906 5.39063 4.19531V17H2.07031ZM9.15445 17V5H12.381V7.09375H12.506C12.7248 6.34896 13.092 5.78646 13.6076 5.40625C14.1232 5.02083 14.717 4.82812 15.3888 4.82812C15.5555 4.82812 15.7352 4.83854 15.9279 4.85937C16.1206 4.88021 16.2899 4.90885 16.4357 4.94531V7.89844C16.2795 7.85156 16.0633 7.8099 15.7873 7.77344C15.5112 7.73698 15.2586 7.71875 15.0295 7.71875C14.5399 7.71875 14.1024 7.82552 13.717 8.03906C13.3367 8.2474 13.0347 8.53906 12.8107 8.91406C12.592 9.28906 12.4826 9.72135 12.4826 10.2109V17H9.15445ZM20.5745 17.2266C19.8089 17.2266 19.1266 17.0938 18.5277 16.8281C17.9287 16.5573 17.4547 16.1589 17.1058 15.6328C16.762 15.1016 16.5902 14.4401 16.5902 13.6484C16.5902 12.9818 16.7126 12.4219 16.9573 11.9687C17.2021 11.5156 17.5355 11.151 17.9573 10.875C18.3792 10.599 18.8584 10.3906 19.3948 10.25C19.9365 10.1094 20.5042 10.0104 21.098 9.95312C21.7959 9.88021 22.3584 9.8125 22.7855 9.75C23.2126 9.68229 23.5224 9.58333 23.7152 9.45312C23.9079 9.32292 24.0042 9.13021 24.0042 8.875V8.82812C24.0042 8.33333 23.848 7.95052 23.5355 7.67969C23.2282 7.40885 22.7907 7.27344 22.223 7.27344C21.624 7.27344 21.1474 7.40625 20.7933 7.67187C20.4391 7.93229 20.2047 8.26042 20.0902 8.65625L17.012 8.40625C17.1683 7.67708 17.4756 7.04687 17.9339 6.51562C18.3922 5.97917 18.9834 5.56771 19.7073 5.28125C20.4365 4.98958 21.2803 4.84375 22.2386 4.84375C22.9053 4.84375 23.5433 4.92187 24.1527 5.07812C24.7672 5.23437 25.3115 5.47656 25.7855 5.80469C26.2646 6.13281 26.6422 6.55469 26.9183 7.07031C27.1943 7.58073 27.3323 8.19271 27.3323 8.90625V17H24.1761V15.3359H24.0823C23.8896 15.7109 23.6318 16.0417 23.3089 16.3281C22.986 16.6094 22.598 16.8307 22.1448 16.9922C21.6917 17.1484 21.1683 17.2266 20.5745 17.2266ZM21.5277 14.9297C22.0172 14.9297 22.4495 14.8333 22.8245 14.6406C23.1995 14.4427 23.4938 14.1771 23.7073 13.8438C23.9209 13.5104 24.0277 13.1328 24.0277 12.7109V11.4375C23.9235 11.5052 23.7803 11.5677 23.598 11.625C23.4209 11.6771 23.2204 11.7266 22.9964 11.7734C22.7724 11.8151 22.5485 11.8542 22.3245 11.8906C22.1006 11.9219 21.8974 11.9505 21.7152 11.9766C21.3245 12.0339 20.9834 12.125 20.6917 12.25C20.4001 12.375 20.1735 12.5443 20.012 12.7578C19.8506 12.9661 19.7698 13.2266 19.7698 13.5391C19.7698 13.9922 19.9339 14.3385 20.262 14.5781C20.5954 14.8125 21.0172 14.9297 21.5277 14.9297ZM29.2544 17V5H32.4263V7.11719H32.5669C32.8169 6.41406 33.2335 5.85937 33.8169 5.45312C34.4002 5.04687 35.0981 4.84375 35.9106 4.84375C36.7335 4.84375 37.4341 5.04948 38.0122 5.46094C38.5903 5.86719 38.9757 6.41927 39.1684 7.11719H39.2934C39.5382 6.42969 39.9809 5.88021 40.6216 5.46875C41.2674 5.05208 42.0304 4.84375 42.9106 4.84375C44.0304 4.84375 44.9393 5.20052 45.6372 5.91406C46.3403 6.6224 46.6919 7.6276 46.6919 8.92969V17H43.3716V9.58594C43.3716 8.91927 43.1945 8.41927 42.8403 8.08594C42.4861 7.7526 42.0434 7.58594 41.5122 7.58594C40.908 7.58594 40.4367 7.77865 40.0981 8.16406C39.7596 8.54427 39.5903 9.04687 39.5903 9.67187V17H36.3638V9.51562C36.3638 8.92708 36.1945 8.45833 35.8559 8.10937C35.5226 7.76042 35.0825 7.58594 34.5356 7.58594C34.1658 7.58594 33.8325 7.67969 33.5356 7.86719C33.244 8.04948 33.0122 8.30729 32.8403 8.64062C32.6684 8.96875 32.5825 9.35417 32.5825 9.79687V17H29.2544ZM54.1295 17.2344C52.8952 17.2344 51.8327 16.9844 50.942 16.4844C50.0566 15.9792 49.3743 15.2656 48.8952 14.3437C48.416 13.4167 48.1764 12.3203 48.1764 11.0547C48.1764 9.82031 48.416 8.73698 48.8952 7.80469C49.3743 6.8724 50.0488 6.14583 50.9186 5.625C51.7936 5.10417 52.8196 4.84375 53.9967 4.84375C54.7884 4.84375 55.5254 4.97135 56.2077 5.22656C56.8952 5.47656 57.4941 5.85417 58.0045 6.35937C58.5202 6.86458 58.9212 7.5 59.2077 8.26562C59.4941 9.02604 59.6373 9.91667 59.6373 10.9375V11.8516H49.5045V9.78906H56.5045C56.5045 9.3099 56.4004 8.88542 56.192 8.51563C55.9837 8.14583 55.6946 7.85677 55.3248 7.64844C54.9603 7.4349 54.5358 7.32812 54.0514 7.32812C53.5462 7.32812 53.0983 7.44531 52.7077 7.67969C52.3222 7.90885 52.0202 8.21875 51.8014 8.60937C51.5827 8.99479 51.4707 9.42448 51.4655 9.89844V11.8594C51.4655 12.4531 51.5748 12.9661 51.7936 13.3984C52.0176 13.8307 52.3327 14.1641 52.7389 14.3984C53.1452 14.6328 53.6269 14.75 54.1842 14.75C54.554 14.75 54.8926 14.6979 55.1998 14.5938C55.5071 14.4896 55.7702 14.3333 55.9889 14.125C56.2077 13.9167 56.3743 13.6615 56.4889 13.3594L59.567 13.5625C59.4108 14.3021 59.0905 14.9479 58.6061 15.5C58.1269 16.0469 57.5071 16.474 56.7467 16.7813C55.9915 17.0833 55.1191 17.2344 54.1295 17.2344ZM63.4305 17L60.1648 5H63.532L65.3914 13.0625H65.5008L67.4383 5H70.743L72.7117 13.0156H72.8133L74.6414 5H78.0008L74.743 17H71.2195L69.157 9.45312H69.0086L66.9461 17H63.4305ZM84.2373 17.2344C83.0237 17.2344 81.9742 16.9766 81.0888 16.4609C80.2086 15.9401 79.5289 15.2161 79.0498 14.2891C78.5706 13.3568 78.331 12.276 78.331 11.0469C78.331 9.80729 78.5706 8.72396 79.0498 7.79687C79.5289 6.86458 80.2086 6.14062 81.0888 5.625C81.9742 5.10417 83.0237 4.84375 84.2373 4.84375C85.4508 4.84375 86.4977 5.10417 87.3779 5.625C88.2633 6.14062 88.9456 6.86458 89.4248 7.79687C89.9039 8.72396 90.1435 9.80729 90.1435 11.0469C90.1435 12.276 89.9039 13.3568 89.4248 14.2891C88.9456 15.2161 88.2633 15.9401 87.3779 16.4609C86.4977 16.9766 85.4508 17.2344 84.2373 17.2344ZM84.2529 14.6562C84.805 14.6562 85.2659 14.5 85.6357 14.1875C86.0055 13.8698 86.2841 13.4375 86.4716 12.8906C86.6644 12.3437 86.7607 11.7214 86.7607 11.0234C86.7607 10.3255 86.6644 9.70313 86.4716 9.15625C86.2841 8.60937 86.0055 8.17708 85.6357 7.85937C85.2659 7.54167 84.805 7.38281 84.2529 7.38281C83.6956 7.38281 83.2268 7.54167 82.8466 7.85937C82.4716 8.17708 82.1878 8.60937 81.9951 9.15625C81.8076 9.70313 81.7138 10.3255 81.7138 11.0234C81.7138 11.7214 81.8076 12.3437 81.9951 12.8906C82.1878 13.4375 82.4716 13.8698 82.8466 14.1875C83.2268 14.5 83.6956 14.6562 84.2529 14.6562ZM91.6476 17V5H94.8741V7.09375H94.9991C95.2179 6.34896 95.5851 5.78646 96.1007 5.40625C96.6163 5.02083 97.2101 4.82812 97.882 4.82812C98.0486 4.82812 98.2283 4.83854 98.421 4.85937C98.6137 4.88021 98.783 4.90885 98.9288 4.94531V7.89844C98.7726 7.85156 98.5564 7.8099 98.2804 7.77344C98.0043 7.73698 97.7517 7.71875 97.5226 7.71875C97.033 7.71875 96.5955 7.82552 96.2101 8.03906C95.8299 8.2474 95.5278 8.53906 95.3038 8.91406C95.0851 9.28906 94.9757 9.72135 94.9757 10.2109V17H91.6476ZM103.005 13.5469L103.013 9.55469H103.497L107.341 5H111.161L105.997 11.0313H105.208L103.005 13.5469ZM99.9895 17V1H103.318V17H99.9895ZM107.49 17L103.958 11.7734L106.177 9.42187L111.388 17H107.49ZM114.08 17.2031C113.564 17.2031 113.121 17.0208 112.751 16.6562C112.387 16.2865 112.205 15.8437 112.205 15.3281C112.205 14.8177 112.387 14.3802 112.751 14.0156C113.121 13.651 113.564 13.4687 114.08 13.4687C114.58 13.4687 115.017 13.651 115.392 14.0156C115.767 14.3802 115.955 14.8177 115.955 15.3281C115.955 15.6719 115.866 15.987 115.689 16.2734C115.517 16.5547 115.29 16.7812 115.009 16.9531C114.728 17.1198 114.418 17.2031 114.08 17.2031ZM122.449 17.1953C121.537 17.1953 120.712 16.9609 119.972 16.4922C119.238 16.0182 118.655 15.3229 118.222 14.4062C117.795 13.4844 117.582 12.3542 117.582 11.0156C117.582 9.64062 117.803 8.4974 118.246 7.58594C118.688 6.66927 119.277 5.98437 120.011 5.53125C120.751 5.07292 121.561 4.84375 122.441 4.84375C123.113 4.84375 123.673 4.95833 124.121 5.1875C124.574 5.41146 124.938 5.69271 125.214 6.03125C125.496 6.36458 125.709 6.69271 125.855 7.01562H125.957V1H129.277V17H125.996V15.0781H125.855C125.699 15.4115 125.477 15.7422 125.191 16.0703C124.91 16.3932 124.543 16.6615 124.089 16.875C123.642 17.0885 123.095 17.1953 122.449 17.1953ZM123.504 14.5469C124.04 14.5469 124.493 14.401 124.863 14.1094C125.238 13.8125 125.524 13.3984 125.722 12.8672C125.925 12.3359 126.027 11.7135 126.027 11C126.027 10.2865 125.928 9.66667 125.73 9.14062C125.532 8.61458 125.246 8.20833 124.871 7.92187C124.496 7.63542 124.04 7.49219 123.504 7.49219C122.957 7.49219 122.496 7.64062 122.121 7.9375C121.746 8.23437 121.462 8.64583 121.269 9.17187C121.076 9.69792 120.98 10.3073 120.98 11C120.98 11.6979 121.076 12.3151 121.269 12.8516C121.467 13.3828 121.751 13.7995 122.121 14.1016C122.496 14.3984 122.957 14.5469 123.504 14.5469ZM136.822 17.2344C135.588 17.2344 134.525 16.9844 133.635 16.4844C132.749 15.9792 132.067 15.2656 131.588 14.3437C131.108 13.4167 130.869 12.3203 130.869 11.0547C130.869 9.82031 131.108 8.73698 131.588 7.80469C132.067 6.8724 132.741 6.14583 133.611 5.625C134.486 5.10417 135.512 4.84375 136.689 4.84375C137.481 4.84375 138.218 4.97135 138.9 5.22656C139.588 5.47656 140.187 5.85417 140.697 6.35937C141.213 6.86458 141.614 7.5 141.9 8.26562C142.187 9.02604 142.33 9.91667 142.33 10.9375V11.8516H132.197V9.78906H139.197C139.197 9.3099 139.093 8.88542 138.885 8.51563C138.676 8.14583 138.387 7.85677 138.017 7.64844C137.653 7.4349 137.228 7.32812 136.744 7.32812C136.239 7.32812 135.791 7.44531 135.4 7.67969C135.015 7.90885 134.713 8.21875 134.494 8.60937C134.275 8.99479 134.163 9.42448 134.158 9.89844V11.8594C134.158 12.4531 134.267 12.9661 134.486 13.3984C134.71 13.8307 135.025 14.1641 135.431 14.3984C135.838 14.6328 136.319 14.75 136.877 14.75C137.247 14.75 137.585 14.6979 137.892 14.5938C138.2 14.4896 138.463 14.3333 138.681 14.125C138.9 13.9167 139.067 13.6615 139.181 13.3594L142.26 13.5625C142.103 14.3021 141.783 14.9479 141.299 15.5C140.819 16.0469 140.2 16.474 139.439 16.7813C138.684 17.0833 137.812 17.2344 136.822 17.2344ZM154.707 5L150.512 17H146.762L142.566 5H146.082L148.574 13.5859H148.699L151.184 5H154.707Z"
					fill="#2e3132"
				/>
			</svg>
		)
	}
)
