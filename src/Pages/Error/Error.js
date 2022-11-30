import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <>
      

      <section>

	<div className="bg-black text-white">
		<div className="flex h-screen">
			<div className="m-auto text-center">
				<div>
					<svg width="631" height="379" viewBox="0 0 631 379" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0)">
							<path
								d="M317.524 379C488.625 379 627.33 368.857 627.33 356.346C627.33 343.834 488.625 333.692 317.524 333.692C146.423 333.692 7.71875 343.834 7.71875 356.346C7.71875 368.857 146.423 379 317.524 379Z"
								fill="#F2F2F2" />
							<path
								d="M305.65 108.342C255.175 108.342 218.934 144.112 218.934 227.575C218.934 322.166 255.175 347.205 305.65 347.205C356.126 347.205 394.526 319.781 394.526 227.575C394.526 129.009 356.126 108.342 305.65 108.342ZM305.982 315.807C271.021 315.807 252.757 293.152 252.757 227.636C252.757 169.827 271.769 139.342 306.73 139.342C341.691 139.342 360.703 159.367 360.703 227.636C360.703 291.5 340.943 315.807 305.982 315.807Z"
								fill="#2F2E41" />
							<path
								d="M188.708 281.229H167.839V213.348C167.839 209.743 166.542 206.285 164.234 203.735C161.926 201.186 158.795 199.754 155.531 199.754H150.641C149.025 199.754 147.424 200.105 145.931 200.788C144.438 201.472 143.081 202.473 141.938 203.735C140.796 204.998 139.889 206.496 139.27 208.146C138.652 209.795 138.334 211.563 138.334 213.348V281.229H79.4676C78.2566 281.229 77.0661 280.884 76.0117 280.226C74.9573 279.568 74.0748 278.62 73.4497 277.474C72.8246 276.329 72.4783 275.024 72.4442 273.687C72.4101 272.35 72.6895 271.026 73.2552 269.843L135.558 139.594C136.335 137.97 136.806 136.189 136.942 134.358C137.079 132.528 136.878 130.686 136.352 128.944C135.826 127.201 134.986 125.595 133.883 124.221C132.779 122.847 131.435 121.734 129.932 120.95L126.254 119.032C123.398 117.542 120.133 117.322 117.134 118.417C114.136 119.513 111.633 121.839 110.144 124.916L34.1574 281.926C32.8635 284.6 32.1865 287.585 32.1865 290.616C32.1865 293.037 32.6182 295.434 33.4569 297.671C34.2956 299.907 35.5249 301.939 37.0746 303.651C38.6243 305.363 40.4641 306.721 42.4888 307.647C44.5136 308.573 46.6838 309.05 48.8754 309.05H138.334V351.974C138.334 354.114 138.715 356.233 139.457 358.21C140.198 360.187 141.285 361.983 142.655 363.496C144.024 365.009 145.651 366.21 147.441 367.029C149.23 367.848 151.149 368.269 153.086 368.269H153.086C155.024 368.269 156.942 367.848 158.732 367.029C160.522 366.21 162.148 365.009 163.518 363.496C164.888 361.983 165.974 360.187 166.716 358.21C167.457 356.233 167.839 354.114 167.839 351.974V309.05H188.708C192.049 309.05 195.252 307.585 197.614 304.976C199.975 302.367 201.302 298.829 201.302 295.14C201.302 291.45 199.975 287.912 197.614 285.304C195.252 282.695 192.049 281.229 188.708 281.229Z"
								fill="#E7D040" />
							<path
								d="M575.157 281.229H554.287V213.348C554.287 209.743 552.99 206.285 550.682 203.735C548.374 201.186 545.244 199.754 541.98 199.754H537.089C535.473 199.754 533.873 200.105 532.379 200.788C530.886 201.472 529.529 202.473 528.387 203.735C527.244 204.998 526.337 206.496 525.719 208.146C525.1 209.795 524.782 211.563 524.782 213.348V281.229H465.916C464.705 281.229 463.514 280.884 462.46 280.226C461.406 279.568 460.523 278.62 459.898 277.474C459.273 276.329 458.926 275.024 458.892 273.687C458.858 272.35 459.138 271.026 459.703 269.843L522.007 139.594C522.783 137.97 523.254 136.189 523.391 134.358C523.527 132.528 523.326 130.686 522.8 128.944C522.275 127.201 521.435 125.595 520.331 124.221C519.228 122.847 517.883 121.734 516.38 120.95L512.702 119.032C509.846 117.542 506.581 117.322 503.583 118.417C500.584 119.513 498.081 121.839 496.593 124.916L420.606 281.926C419.312 284.6 418.635 287.585 418.635 290.616C418.635 295.505 420.393 300.194 423.523 303.651C426.653 307.108 430.897 309.05 435.324 309.05H524.782V351.974C524.782 356.296 526.336 360.44 529.103 363.496C531.869 366.552 535.622 368.269 539.534 368.269C543.447 368.269 547.199 366.552 549.966 363.496C552.733 360.44 554.287 356.296 554.287 351.974V309.05H575.157C578.497 309.05 581.7 307.585 584.062 304.976C586.423 302.367 587.75 298.829 587.75 295.14C587.75 291.45 586.423 287.912 584.062 285.304C581.7 282.695 578.497 281.229 575.157 281.229Z"
								fill="#E7D040" />
							<path
								d="M194.466 273.28H173.597V205.399C173.597 203.614 173.278 201.846 172.66 200.197C172.041 198.547 171.135 197.049 169.992 195.786C168.849 194.524 167.492 193.523 165.999 192.84C164.506 192.156 162.905 191.805 161.289 191.805H156.399C153.135 191.805 150.004 193.237 147.696 195.786C145.388 198.336 144.091 201.794 144.091 205.399V273.28H85.2254C84.0144 273.28 82.8239 272.935 81.7695 272.277C80.7151 271.619 79.8326 270.671 79.2075 269.525C78.5825 268.38 78.2361 267.075 78.202 265.738C78.1679 264.401 78.4473 263.077 79.013 261.894L141.316 131.645C142.093 130.021 142.564 128.24 142.7 126.41C142.837 124.579 142.636 122.737 142.11 120.995C141.584 119.252 140.744 117.646 139.641 116.272C138.537 114.898 137.193 113.786 135.69 113.001L132.012 111.083C129.156 109.593 125.891 109.373 122.892 110.469C119.894 111.564 117.391 113.89 115.902 116.967L39.9153 273.977C38.6213 276.651 37.9443 279.636 37.9443 282.668V282.668C37.9443 287.556 39.7026 292.245 42.8324 295.702C45.9622 299.159 50.207 301.101 54.6332 301.101H144.091V344.025C144.091 346.165 144.473 348.284 145.214 350.261C145.956 352.238 147.042 354.034 148.412 355.547C149.782 357.061 151.409 358.261 153.198 359.08C154.988 359.899 156.907 360.32 158.844 360.32H158.844C162.757 360.32 166.509 358.603 169.276 355.547C172.042 352.492 173.597 348.347 173.597 344.025V301.101H194.466C196.12 301.101 197.758 300.742 199.286 300.042C200.814 299.343 202.202 298.319 203.371 297.027C204.541 295.735 205.468 294.202 206.101 292.514C206.734 290.827 207.06 289.018 207.06 287.191V287.191C207.06 285.364 206.734 283.555 206.101 281.868C205.468 280.18 204.541 278.646 203.371 277.355C202.202 276.063 200.814 275.038 199.286 274.339C197.758 273.64 196.12 273.28 194.466 273.28V273.28Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M585.951 273.28H565.081V205.399C565.081 201.794 563.784 198.336 561.476 195.786C559.168 193.237 556.038 191.805 552.773 191.805H547.883C546.267 191.805 544.667 192.156 543.173 192.84C541.68 193.523 540.323 194.524 539.181 195.786C538.038 197.049 537.131 198.547 536.513 200.197C535.894 201.846 535.576 203.614 535.576 205.399V273.28H476.71C475.499 273.28 474.308 272.935 473.254 272.277C472.2 271.619 471.317 270.671 470.692 269.525C470.067 268.38 469.72 267.075 469.686 265.738C469.652 264.401 469.932 263.077 470.497 261.894L532.8 131.645C533.577 130.021 534.048 128.24 534.185 126.41C534.321 124.579 534.12 122.737 533.594 120.995C533.069 119.252 532.228 117.646 531.125 116.272C530.021 114.898 528.677 113.786 527.174 113.001L523.496 111.083C520.64 109.593 517.375 109.373 514.377 110.469C511.378 111.564 508.875 113.89 507.386 116.967L431.4 273.977C430.106 276.651 429.429 279.636 429.429 282.668C429.429 287.556 431.187 292.245 434.317 295.702C437.447 299.159 441.691 301.101 446.118 301.101H535.576V344.025C535.576 348.347 537.13 352.492 539.897 355.547C542.663 358.603 546.416 360.32 550.328 360.32V360.32C554.241 360.32 557.993 358.603 560.76 355.547C563.527 352.492 565.081 348.347 565.081 344.025V301.101H585.951C587.604 301.101 589.242 300.742 590.77 300.042C592.298 299.343 593.686 298.319 594.856 297.027C596.025 295.735 596.953 294.202 597.586 292.514C598.219 290.827 598.544 289.018 598.544 287.191V287.191C598.544 283.502 597.217 279.963 594.856 277.355C592.494 274.746 589.291 273.28 585.951 273.28V273.28Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M317.165 101.188C266.689 101.188 230.448 136.958 230.448 220.421C230.448 315.012 266.689 340.051 317.165 340.051C367.641 340.051 406.041 312.627 406.041 220.421C406.041 121.855 367.641 101.188 317.165 101.188ZM317.497 308.653C282.536 308.653 264.271 285.998 264.271 220.482C264.271 162.673 283.284 132.188 318.245 132.188C353.205 132.188 372.218 152.213 372.218 220.482C372.218 284.346 352.457 308.653 317.497 308.653V308.653Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M276.705 20.2086C280.89 20.2086 284.282 16.4615 284.282 11.8394C284.282 7.21717 280.89 3.47015 276.705 3.47015C272.52 3.47015 269.128 7.21717 269.128 11.8394C269.128 16.4615 272.52 20.2086 276.705 20.2086Z"
								fill="#2F2E41" />
							<path
								d="M295.186 60.8298C306.923 60.8298 316.439 47.2126 316.439 30.4149C316.439 13.6172 306.923 0 295.186 0C283.449 0 273.934 13.6172 273.934 30.4149C273.934 47.2126 283.449 60.8298 295.186 60.8298Z"
								fill="#2F2E41" />
							<path opacity="0.1"
								d="M295.186 51.6441C284.54 51.6441 275.722 40.4404 274.175 25.822C274.014 27.3465 273.933 28.8801 273.934 30.4149C273.934 47.2126 283.449 60.8298 295.186 60.8298C306.923 60.8298 316.439 47.2126 316.439 30.4149C316.439 28.8801 316.358 27.3465 316.197 25.822C314.65 40.4404 305.833 51.6441 295.186 51.6441Z"
								fill="black" />
							<path
								d="M338.432 119.486C337.976 121.558 336.008 123.217 333.829 124.376C329.247 126.813 323.595 127.541 318.112 127.785C316.714 127.879 315.311 127.85 313.916 127.699C311.214 127.41 308.679 126.123 306.722 124.046C306.582 123.945 306.467 123.807 306.389 123.644C306.311 123.482 306.271 123.3 306.274 123.116C306.276 122.931 306.321 122.751 306.404 122.591C306.487 122.431 306.605 122.297 306.747 122.201C309.666 118.66 314.536 116.488 319.443 114.925C323.163 113.739 329.651 110.669 333.708 111.083C337.639 111.485 339.009 116.87 338.432 119.486Z"
								fill="#3F3D56" />
							<path opacity="0.1"
								d="M338.432 119.486C337.976 121.558 336.008 123.217 333.829 124.376C329.247 126.813 323.595 127.541 318.112 127.785C316.714 127.879 315.311 127.85 313.916 127.699C311.214 127.41 308.679 126.123 306.722 124.046C306.582 123.945 306.467 123.807 306.389 123.644C306.311 123.482 306.271 123.3 306.274 123.116C306.276 122.931 306.321 122.751 306.404 122.591C306.487 122.431 306.605 122.297 306.747 122.201C309.666 118.66 314.536 116.488 319.443 114.925C323.163 113.739 329.651 110.669 333.708 111.083C337.639 111.485 339.009 116.87 338.432 119.486Z"
								fill="black" />
							<path
								d="M280.172 104.003C278.773 107.031 278.52 110.548 279.468 113.782C280.432 116.992 282.237 119.813 284.653 121.889C290.582 127.138 298.742 127.861 306.34 127.788C312.998 127.724 319.648 127.22 326.252 126.28C328.466 126.064 330.641 125.506 332.714 124.623C335.194 123.438 337.373 121.264 338.256 118.444C339.138 115.623 338.512 112.169 336.415 110.287C334.573 108.633 332.032 108.405 329.662 108.248L316.103 107.348C317.442 105.85 319.226 105.003 320.857 103.915C323.022 102.47 324.46 100.045 326.034 97.859C328.458 94.658 331.097 91.6619 333.926 88.8957C334.367 91.6919 335.969 93.9881 337.854 95.9174C339.738 97.8468 341.911 99.4 343.87 101.237C348.615 105.686 352.031 111.725 357.021 115.833C360.454 114.837 363.663 113.067 366.447 110.636L364.507 106.755C364.346 106.356 364.094 106.009 363.776 105.748C363.227 105.375 362.52 105.567 361.882 105.462C360.179 105.18 359.435 103.007 358.766 101.253C356.931 96.4387 353.417 92.7033 350.416 88.6657C348.201 85.6853 346.236 82.4885 344.545 79.1148C343.537 77.1027 342.614 75.0077 341.246 73.2743C339.878 71.5408 337.961 70.178 335.879 70.1731C334.039 70.1688 332.342 71.2003 330.761 72.238C325.944 75.3986 321.309 78.8865 316.883 82.6816C314.566 84.6678 312.265 86.7662 309.548 87.9842C308.404 88.4969 307.198 88.8473 306.1 89.4712C304.178 90.5639 302.719 92.4127 301.149 94.0538C295.547 99.9073 287.878 103.7 280.172 104.003Z"
								fill="#3F3D56" />
							<path
								d="M308.525 62.3403C308.462 64.1296 308.118 65.893 307.507 67.5517C307.197 68.3789 306.737 69.1269 306.154 69.7488C305.571 70.3708 304.879 70.8535 304.12 71.1668C303.042 71.4858 301.911 71.5263 300.817 71.2851C299.863 71.175 298.943 70.829 298.126 70.2727C296.855 69.3072 296.221 67.5843 295.99 65.8982C295.759 64.2142 295.862 62.4934 295.715 60.7971C295.571 59.427 295.335 58.0706 295.009 56.7391C294.909 56.2961 294.807 55.8552 294.707 55.4143C294.609 54.9734 294.513 54.5325 294.425 54.0916C294.343 53.6772 294.268 53.2608 294.203 52.8423C294.149 52.4892 294.101 52.134 294.066 51.7768C294.034 50.7177 293.874 49.6682 293.591 48.6557C293.326 47.999 292.993 47.3779 292.601 46.8042C292.432 46.5389 292.27 46.2735 292.12 45.9979C291.687 45.2818 291.486 44.4251 291.549 43.5668C291.567 43.4341 291.596 43.3036 291.636 43.1769C291.651 43.1279 291.667 43.079 291.686 43.032C291.852 42.9821 292.005 42.8882 292.131 42.7583C292.257 42.6285 292.352 42.4667 292.408 42.2869C292.472 41.9007 292.442 41.5028 292.322 41.1336C292.183 40.6176 291.994 40.1199 291.758 39.6496C291.603 39.3393 291.076 38.78 291.072 38.4248C291.065 37.7103 292.329 37.1347 292.841 36.853C294.403 35.9887 296.146 35.5985 297.89 35.7221C299.008 35.8058 300.22 36.1855 300.837 37.2204C301.392 38.1533 301.318 39.3617 301.554 40.4456C301.579 40.6032 301.64 40.7513 301.73 40.8763C301.851 40.9977 302.002 41.0748 302.164 41.0968C302.438 41.1569 302.719 41.1694 302.996 41.1335H302.998C303.071 41.1271 303.144 41.1155 303.216 41.0988C303.648 41.0108 304.056 40.8162 304.41 40.5293C304.639 40.462 304.87 40.4068 305.103 40.364C305.112 40.3629 305.121 40.3609 305.13 40.3579C306.056 43.5851 306.176 47.045 306.934 50.3315C307.309 51.9665 307.847 53.5812 307.923 55.2632C307.928 55.3367 307.93 55.4122 307.932 55.4877C307.943 56.0287 307.904 56.5737 307.925 57.1126C307.932 57.3553 307.956 57.5969 307.999 57.8352C308.081 58.2185 308.185 58.5961 308.307 58.9661L308.313 58.9844C308.348 59.1028 308.381 59.2233 308.409 59.3437C308.429 59.4315 308.448 59.5172 308.462 59.605L308.464 59.6111C308.601 60.5131 308.622 61.432 308.525 62.3403Z"
								fill="#FBBEBE" />
							<path
								d="M295.555 41.2336C301.577 41.2336 306.458 35.8416 306.458 29.1901C306.458 22.5387 301.577 17.1467 295.555 17.1467C289.533 17.1467 284.651 22.5387 284.651 29.1901C284.651 35.8416 289.533 41.2336 295.555 41.2336Z"
								fill="#FBBEBE" />
							<path
								d="M364.779 94.8087C364.463 91.523 363.406 88.3773 361.704 85.6598C361.987 87.5173 362.27 89.3742 362.554 91.2304C362.201 91.3432 361.826 91.3398 361.475 91.2205C361.124 91.1012 360.812 90.8712 360.577 90.5588C360.118 89.9256 359.767 89.2056 359.54 88.4339C358.301 85.0372 356.682 81.8257 354.719 78.8746C347.777 78.2357 340.916 75.0574 334.811 71.3525C328.706 67.6497 322.991 63.2099 316.967 59.3499C315.922 58.6525 314.834 58.0386 313.71 57.5127C311.825 56.6778 309.709 56.2451 307.922 55.2632C307.802 55.1979 307.682 55.1285 307.564 55.0571C307.16 54.8145 306.778 54.5309 306.422 54.2099C306.229 54.0374 306.047 53.8519 305.875 53.6547C304.983 52.5089 304.276 51.2026 303.785 49.7926C302.826 47.4493 302.484 44.6221 301.526 42.2787C301.966 41.8245 302.461 41.4392 302.996 41.1336H302.997C303.075 41.0887 303.153 41.0458 303.232 41.005C303.611 40.8079 304.005 40.6488 304.409 40.5294C304.638 40.462 304.869 40.4069 305.102 40.364C305.112 40.363 305.121 40.3609 305.13 40.3579C306.21 40.1636 307.316 40.2602 308.355 40.6396C309.874 41.2071 311.155 42.34 312.432 43.4116C314.506 45.026 316.496 46.7693 318.392 48.6332C319.445 49.7477 320.406 50.9725 321.539 51.985C322.48 52.7875 323.473 53.514 324.509 54.1589C330.639 58.1924 336.769 62.2253 342.9 66.2575C344.976 67.6231 347.053 68.9887 349.082 70.4339C352.165 72.6303 355.136 75.0104 358.106 77.3885C359.856 78.7888 361.606 80.1898 363.355 81.5915C363.928 81.9958 364.432 82.5101 364.842 83.1102C365.204 83.7915 365.43 84.5511 365.502 85.3372C365.941 88.5132 365.693 91.7588 364.779 94.8087Z"
								fill="#FBBEBE" />
							<path
								d="M311.229 71.3974C310.493 75.0411 307.159 77.2436 305.417 80.4443C303.251 84.4166 304.134 89.034 304.947 93.584C303.461 94.9986 301.975 96.4132 300.488 97.8278C299.667 98.6055 298.847 99.3873 297.963 100.075C296.675 101.028 295.329 101.882 293.935 102.631C292.619 103.378 291.303 104.126 289.987 104.874C288.764 105.634 287.468 106.241 286.123 106.683C283.53 107.418 280.777 106.903 278.212 106.052C277.909 105.964 277.618 105.833 277.347 105.662C277.187 105.557 277.047 105.417 276.936 105.252C276.684 104.751 276.592 104.17 276.676 103.605C276.936 98.8362 277.992 94.1678 279.043 89.5341C279.605 86.7542 280.361 84.0264 281.303 81.3751C282.228 79.1033 283.29 76.9033 284.484 74.79C285.801 72.1311 287.362 69.6284 289.141 67.321C290.007 66.4329 290.736 65.3946 291.299 64.2469C291.956 62.5934 291.702 60.6971 291.835 58.8967C291.937 57.544 292.262 56.2233 292.795 54.9999V54.9979C293.079 54.3389 293.422 53.7126 293.818 53.1281C293.998 53.5894 294.177 54.05 294.356 54.51C294.474 54.8121 294.591 55.1136 294.707 55.4143C294.859 55.8022 295.009 56.1886 295.158 56.5738C295.589 57.6801 296.019 58.7858 296.448 59.8908C296.912 61.2826 297.573 62.5841 298.407 63.7468C298.788 64.3421 299.302 64.8181 299.9 65.1283C300.497 65.4385 301.157 65.5722 301.815 65.5165C302.474 65.4608 303.107 65.2175 303.655 64.8103C304.203 64.4032 304.645 63.8461 304.94 63.1936C305.561 61.9755 306.011 60.6602 306.274 59.2927C306.639 57.6277 306.689 55.8975 306.422 54.21C305.977 50.9603 304.725 47.6412 303.816 44.6221C303.446 43.6155 303.232 42.5473 303.182 41.4622C303.184 41.3403 303.195 41.2188 303.216 41.0989C303.221 41.0683 303.227 41.0356 303.232 41.005C303.611 40.808 304.005 40.6488 304.409 40.5294C304.639 40.462 304.87 40.4069 305.102 40.364C305.903 45.1488 306.704 49.9335 307.507 54.7182C307.525 54.8305 307.546 54.9428 307.564 55.0571C307.679 55.743 307.795 56.4288 307.924 57.1126C308.041 57.7332 308.167 58.3517 308.307 58.9661L308.313 58.9845C308.361 59.1927 308.41 59.3989 308.462 59.605L308.464 59.6112C308.606 60.1746 308.765 60.7339 308.945 61.285C310.031 64.6061 311.925 67.9497 311.229 71.3974Z"
								fill="#E7D040" />
							<path
								d="M355.479 122.602C355.445 123.304 355.568 124.005 355.838 124.642C356.52 126.019 358.157 126.332 359.574 126.461C367.851 127.213 376.177 126.932 384.397 125.626C384.843 125.592 385.276 125.444 385.661 125.193C386.829 124.288 386.109 122.082 384.833 121.376C383.557 120.67 382.042 120.84 380.642 120.534C379.251 120.147 377.927 119.513 376.72 118.655C373.881 116.853 371.083 114.975 368.326 113.019C366.685 111.855 364.748 110.613 362.899 111.303C357.892 113.174 355.446 116.637 355.479 122.602Z"
								fill="#3F3D56" />
							<path
								d="M294.467 53.8364V53.8384C294.454 53.9242 294.441 54.0079 294.424 54.0916C294.404 54.2304 294.38 54.3712 294.356 54.51C294.127 55.8062 293.846 57.0963 293.522 58.3782C292.635 61.9198 291.447 65.4042 290.268 68.8377C287.104 78.0438 283.94 87.2506 280.775 96.458C279.976 98.7769 279.18 101.098 278.272 103.37C277.969 104.127 277.657 104.89 277.347 105.662C276.234 108.424 275.166 111.276 274.811 114.215C274.48 116.15 274.442 118.131 274.698 120.08C275.053 122.007 276.112 123.889 277.77 124.601C278.579 124.95 279.738 125.418 279.516 126.346C279.396 126.857 278.871 127.106 278.4 127.191C277.778 127.301 277.141 127.258 276.536 127.065C275.93 126.873 275.37 126.535 274.896 126.077C274.011 125.209 273.331 123.86 272.154 123.715C271.339 123.617 270.588 124.156 269.842 124.534C266.796 126.071 263.248 124.995 260.049 123.903C260.3 122.472 261.601 121.529 262.893 121.243C264.185 120.955 265.521 121.159 266.839 121.121C267.26 121.146 267.679 121.027 268.038 120.78C268.359 120.454 268.585 120.028 268.685 119.559C269.533 116.781 270.165 113.928 270.572 111.031C270.997 108.003 271.174 104.929 271.78 101.939C272.251 99.6057 272.98 97.346 273.604 95.0557C274.812 90.3401 275.804 85.5602 276.576 80.7342C276.966 78.7292 277.246 76.6998 277.413 74.6573C277.518 72.9631 277.468 71.2606 277.616 69.5725C277.864 67.3762 278.279 65.2069 278.856 63.0874C279.422 60.7747 279.987 58.4633 280.551 56.1532C281.388 52.7341 282.286 49.1823 284.408 46.5246C285.145 45.5889 286.048 44.8304 287.061 44.296C288.074 43.7616 289.176 43.4627 290.298 43.4178C290.718 43.4172 291.138 43.4672 291.549 43.5668C291.617 43.5851 291.685 43.6035 291.754 43.6239C292.202 43.7532 292.631 43.9497 293.031 44.2077C293.685 43.7484 294.018 43.9097 294.452 44.618C294.833 45.3676 295.012 46.2216 294.969 47.0798C295.006 49.3449 294.838 51.6083 294.467 53.8364Z"
								fill="#FBBEBE" />
							<path
								d="M295.186 56.5431L295.158 56.5737L295.009 56.7391L293.523 58.3782L292.795 54.9999L290.298 43.4178C290.719 43.4172 291.138 43.4671 291.549 43.5668C291.567 43.4341 291.596 43.3035 291.636 43.1769L291.754 43.6239L292.6 46.8042L294.203 52.8423L294.467 53.8364V53.8384L295.186 56.5431Z"
								fill="#E7D040" />
							<path
								d="M304.615 19.593C304.613 20.6655 304.421 21.7272 304.048 22.7174C303.675 23.7076 303.129 24.6069 302.441 25.3639C302.192 25.6394 301.925 25.8945 301.642 26.127C300.367 27.1889 298.814 27.7637 297.217 27.7645H288.351C286.392 27.7611 284.514 26.8992 283.129 25.3678C281.745 23.8365 280.968 21.761 280.968 19.597C280.968 17.4331 281.745 15.3575 283.129 13.8262C284.514 12.2949 286.392 11.4329 288.351 11.4296H297.217C299.176 11.4352 301.054 12.2968 302.44 13.8263C303.826 15.3558 304.608 17.429 304.615 19.593Z"
								fill="#2F2E41" />
							<path
								d="M312.927 20.2086C317.111 20.2086 320.504 16.4615 320.504 11.8394C320.504 7.21717 317.111 3.47015 312.927 3.47015C308.742 3.47015 305.35 7.21717 305.35 11.8394C305.35 16.4615 308.742 20.2086 312.927 20.2086Z"
								fill="#2F2E41" />
							<path opacity="0.1"
								d="M312.742 3.47015C312.649 3.47015 312.557 3.47423 312.465 3.47789C314.425 3.5566 316.281 4.472 317.642 6.03147C319.004 7.59095 319.765 9.67293 319.765 11.8394C319.765 14.0058 319.004 16.0878 317.642 17.6472C316.281 19.2067 314.425 20.1221 312.465 20.2008C312.557 20.2045 312.649 20.2086 312.742 20.2086C314.752 20.2086 316.679 19.3268 318.1 17.7573C319.521 16.1877 320.319 14.059 320.319 11.8394C320.319 9.61971 319.521 7.49097 318.1 5.92144C316.679 4.35191 314.752 3.47015 312.742 3.47015Z"
								fill="black" />
							<path opacity="0.1"
								d="M276.705 3.47015C276.798 3.47015 276.89 3.47423 276.982 3.47789C275.022 3.5566 273.166 4.472 271.805 6.03147C270.443 7.59095 269.683 9.67293 269.683 11.8394C269.683 14.0058 270.443 16.0878 271.805 17.6472C273.166 19.2067 275.022 20.1221 276.982 20.2008C276.89 20.2045 276.798 20.2086 276.705 20.2086C274.697 20.2066 272.771 19.324 271.352 17.7547C269.932 16.1853 269.135 14.0577 269.135 11.8394C269.135 9.62099 269.932 7.49336 271.352 5.92404C272.771 4.35472 274.697 3.47211 276.705 3.47015Z"
								fill="black" />
							<path opacity="0.1"
								d="M301.642 26.127C300.367 27.1889 298.814 27.7637 297.217 27.7645H288.351C286.754 27.7637 285.2 27.1889 283.925 26.127H301.642Z"
								fill="black" />
							<path
								d="M358.896 86.7696C358.896 86.7696 360.806 92.8491 362.554 91.2304L361.16 83.2837L358.896 86.7696Z"
								fill="#FBBEBE" />
							<path
								d="M591.34 272.169C593.119 272.883 595.024 273.131 596.905 272.894C598.786 272.656 600.591 271.939 602.178 270.8C603.765 269.66 605.091 268.129 606.051 266.327C607.011 264.525 607.579 262.501 607.711 260.415C607.842 258.329 607.532 256.238 606.807 254.306C606.082 252.375 604.96 250.656 603.531 249.285C602.101 247.914 600.403 246.929 598.57 246.406C596.737 245.884 594.819 245.839 592.968 246.275L593.274 253.224L590.297 247.269C587.376 248.785 585.119 251.52 584.023 254.873C583.633 256.048 583.397 257.277 583.32 258.525C583.132 261.453 583.813 264.369 585.26 266.831C586.708 269.293 588.842 271.167 591.34 272.169Z"
								fill="#57B894" />
							<path
								d="M606.068 352.767C605.018 346.857 609.571 341.618 614.068 338.212C618.565 334.807 623.82 331.461 625.355 325.681C627.56 317.375 620.991 309.768 615.878 303.209C612.085 298.34 608.827 292.993 606.174 287.278C605.11 284.986 604.132 282.591 603.853 280.034C603.449 276.352 604.52 272.689 605.599 269.177C609.193 257.477 613.036 245.876 617.127 234.373"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M591.843 270.379C593.622 271.094 595.527 271.342 597.408 271.105C599.289 270.867 601.094 270.15 602.681 269.011C604.268 267.871 605.594 266.34 606.554 264.538C607.514 262.736 608.082 260.712 608.213 258.626C608.345 256.54 608.035 254.449 607.31 252.517C606.585 250.586 605.463 248.867 604.034 247.496C602.604 246.125 600.906 245.14 599.073 244.617C597.24 244.095 595.322 244.05 593.471 244.486L593.777 251.435L590.8 245.479C587.879 246.996 585.622 249.731 584.526 253.084C584.136 254.259 583.9 255.488 583.823 256.736C583.635 259.664 584.316 262.58 585.763 265.042C587.211 267.504 589.345 269.378 591.843 270.379V270.379Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M604.575 231.973C605.273 229.845 606.445 227.946 607.982 226.449C609.52 224.953 611.374 223.909 613.373 223.412L614.379 230.018L616.245 223.08C618.836 223.122 621.347 224.073 623.417 225.795C625.486 227.516 627.007 229.92 627.759 232.659C628.511 235.397 628.456 238.329 627.602 241.031C626.747 243.733 625.137 246.064 623.004 247.69C620.872 249.315 618.327 250.149 615.737 250.073C613.147 249.996 610.646 249.012 608.595 247.264C606.544 245.515 605.049 243.091 604.327 240.343C603.604 237.594 603.691 234.663 604.575 231.973H604.575Z"
								fill="#57B894" />
							<path
								d="M605.246 229.588C605.944 227.46 607.116 225.56 608.653 224.064C610.191 222.568 612.044 221.523 614.044 221.026L615.05 227.633L616.916 220.694C619.507 220.737 622.018 221.687 624.088 223.409C626.157 225.131 627.678 227.535 628.43 230.273C629.182 233.012 629.127 235.944 628.272 238.645C627.418 241.347 625.808 243.679 623.675 245.304C621.543 246.929 618.998 247.764 616.408 247.687C613.817 247.611 611.316 246.627 609.266 244.878C607.215 243.129 605.72 240.705 604.998 237.957C604.275 235.209 604.362 232.278 605.246 229.588H605.246Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M613.732 303.342C616.554 304.473 619.653 304.417 622.44 303.186C625.227 301.954 627.506 299.633 628.842 296.665C630.179 293.697 630.481 290.289 629.689 287.091C628.897 283.893 627.068 281.129 624.55 279.325L623.116 284.657L622.1 277.973C622.089 277.968 622.079 277.963 622.068 277.96C620.559 277.354 618.957 277.083 617.353 277.161C615.749 277.24 614.174 277.666 612.719 278.417C611.265 279.168 609.958 280.228 608.874 281.537C607.791 282.846 606.951 284.377 606.404 286.045C605.856 287.712 605.611 289.482 605.683 291.254C605.755 293.026 606.143 294.764 606.823 296.371C607.504 297.977 608.464 299.42 609.65 300.616C610.835 301.812 612.222 302.739 613.732 303.342H613.732Z"
								fill="#57B894" />
							<path
								d="M614.314 300.926C617.136 302.057 620.235 302.001 623.022 300.769C625.809 299.538 628.088 297.217 629.424 294.249C630.761 291.28 631.063 287.873 630.271 284.675C629.479 281.477 627.65 278.713 625.132 276.909L623.698 282.241L622.682 275.557C622.672 275.551 622.661 275.547 622.65 275.544C621.141 274.938 619.539 274.666 617.935 274.745C616.331 274.823 614.756 275.25 613.301 276.001C611.847 276.752 610.54 277.812 609.456 279.121C608.373 280.429 607.533 281.961 606.986 283.628C606.438 285.296 606.193 287.066 606.265 288.837C606.337 290.609 606.725 292.348 607.405 293.954C608.086 295.561 609.046 297.003 610.232 298.2C611.417 299.396 612.804 300.322 614.314 300.926H614.314Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M601.007 325.764C601.492 328.813 602.912 331.585 605.028 333.615C607.144 335.645 609.827 336.81 612.628 336.915C615.429 337.019 618.178 336.056 620.413 334.188C622.647 332.319 624.233 329.659 624.902 326.653C625.572 323.646 625.286 320.477 624.091 317.677C622.897 314.876 620.867 312.615 618.342 311.271C615.816 309.927 612.95 309.584 610.223 310.297C607.495 311.011 605.073 312.739 603.363 315.191L608.808 324.245L601.367 319.44C600.79 321.485 600.667 323.654 601.007 325.764Z"
								fill="#57B894" />
							<path
								d="M601.511 323.975C601.996 327.024 603.416 329.796 605.532 331.826C607.647 333.856 610.331 335.021 613.132 335.125C615.933 335.23 618.682 334.267 620.917 332.398C623.151 330.53 624.736 327.87 625.406 324.863C626.076 321.857 625.789 318.688 624.595 315.888C623.4 313.087 621.37 310.825 618.845 309.482C616.32 308.138 613.454 307.795 610.727 308.508C607.999 309.222 605.577 310.95 603.866 313.402L609.312 322.456L601.871 317.651C601.294 319.696 601.171 321.865 601.511 323.975V323.975Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M5.28973 305.058C6.45865 305.527 7.71029 305.69 8.946 305.534C10.1817 305.378 11.3677 304.907 12.4105 304.159C13.4534 303.41 14.3245 302.404 14.9553 301.22C15.586 300.036 15.9592 298.706 16.0453 297.336C16.1315 295.965 15.9283 294.591 15.4517 293.322C14.9752 292.053 14.2383 290.924 13.2992 290.023C12.36 289.122 11.2443 288.475 10.04 288.132C8.83569 287.788 7.57565 287.759 6.35922 288.045L6.56024 292.611L4.60457 288.698C2.6852 289.694 1.20241 291.491 0.482041 293.695C0.226208 294.466 0.0706801 295.274 0.0200981 296.094C-0.103344 298.018 0.344308 299.934 1.29522 301.551C2.24612 303.169 3.64846 304.4 5.28973 305.058Z"
								fill="#57B894" />
							<path
								d="M14.967 358.013C14.2767 354.13 17.2681 350.687 20.2229 348.45C23.1778 346.212 26.6303 344.014 27.6385 340.217C29.0875 334.759 24.7715 329.762 21.4122 325.452C18.92 322.253 16.7797 318.74 15.0362 314.985C14.2783 313.51 13.762 311.899 13.5112 310.226C13.2463 307.807 13.9499 305.4 14.6587 303.092C17.0201 295.406 19.5448 287.783 22.2328 280.226"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M5.62079 303.882C6.78971 304.352 8.04135 304.515 9.27706 304.359C10.5128 304.203 11.6988 303.732 12.7416 302.983C13.7844 302.234 14.6555 301.228 15.2863 300.044C15.9171 298.86 16.2902 297.531 16.3764 296.16C16.4625 294.789 16.2593 293.416 15.7828 292.147C15.3062 290.878 14.5693 289.748 13.6302 288.848C12.6911 287.947 11.5754 287.299 10.3711 286.956C9.16674 286.613 7.90671 286.583 6.69028 286.87L6.8913 291.436L4.93563 287.523C3.01626 288.519 1.53346 290.316 0.813095 292.519C0.557265 293.291 0.40174 294.099 0.351155 294.919C0.227705 296.842 0.675354 298.758 1.62626 300.376C2.57717 301.993 3.97952 303.224 5.62079 303.882V303.882Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M13.9855 278.649C14.4442 277.251 15.2141 276.003 16.2243 275.02C17.2345 274.037 18.4524 273.35 19.7658 273.024L20.4271 277.364L21.653 272.806C23.3551 272.833 25.0052 273.458 26.365 274.589C27.7247 275.721 28.7238 277.3 29.2181 279.099C29.7123 280.898 29.676 282.825 29.1145 284.6C28.553 286.375 27.4953 287.907 26.0941 288.975C24.6929 290.043 23.0207 290.591 21.319 290.541C19.6173 290.49 17.9741 289.844 16.6267 288.695C15.2792 287.546 14.2972 285.953 13.8225 284.148C13.3477 282.342 13.4048 280.416 13.9855 278.649Z"
								fill="#57B894" />
							<path
								d="M14.4259 277.081C14.8846 275.683 15.6546 274.435 16.6647 273.452C17.6749 272.469 18.8928 271.783 20.2062 271.456L20.8675 275.797L22.0934 271.238C23.7955 271.266 25.4456 271.891 26.8054 273.022C28.1652 274.153 29.1643 275.733 29.6585 277.532C30.1527 279.331 30.1164 281.257 29.5549 283.032C28.9934 284.808 27.9357 286.34 26.5345 287.407C25.1333 288.475 23.4612 289.024 21.7595 288.973C20.0577 288.923 18.4145 288.277 17.0671 287.127C15.7196 285.978 14.7376 284.386 14.2629 282.58C13.7882 280.775 13.8453 278.849 14.4259 277.081V277.081Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M20.0019 325.54C21.8557 326.282 23.8921 326.246 25.723 325.437C27.5539 324.628 29.0512 323.103 29.9296 321.152C30.8079 319.202 31.0059 316.963 30.4858 314.862C29.9657 312.761 28.7638 310.945 27.1093 309.76L26.1673 313.263L25.4993 308.871C25.4927 308.868 25.4859 308.865 25.4789 308.863C24.4873 308.465 23.4344 308.286 22.3804 308.337C21.3263 308.389 20.2917 308.669 19.3358 309.162C18.3798 309.656 17.5213 310.352 16.8091 311.212C16.097 312.072 15.5453 313.079 15.1855 314.174C14.8257 315.27 14.6648 316.433 14.7122 317.597C14.7595 318.761 15.0141 319.904 15.4614 320.959C15.9087 322.015 16.54 322.963 17.319 323.749C18.0981 324.534 19.0098 325.143 20.0019 325.54Z"
								fill="#57B894" />
							<path
								d="M20.3847 323.952C22.2385 324.695 24.2749 324.658 26.1058 323.849C27.9367 323.04 29.434 321.515 30.3124 319.565C31.1907 317.615 31.3887 315.376 30.8686 313.275C30.3485 311.174 29.1466 309.358 27.4921 308.172L26.5501 311.676L25.8822 307.284C25.8756 307.28 25.8687 307.278 25.8617 307.275C24.8704 306.878 23.8179 306.7 22.7644 306.753C21.7108 306.805 20.6769 307.085 19.7216 307.579C17.7923 308.575 16.3004 310.377 15.5741 312.589C14.8478 314.8 14.9466 317.24 15.8488 319.371C16.751 321.502 18.3826 323.15 20.3847 323.952V323.952Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M11.6419 340.271C11.9607 342.274 12.8933 344.096 14.2835 345.429C15.6737 346.763 17.4369 347.529 19.2773 347.597C21.1177 347.666 22.9235 347.033 24.3918 345.805C25.86 344.578 26.9015 342.83 27.3416 340.855C27.7816 338.88 27.5934 336.798 26.8086 334.958C26.0237 333.118 24.6899 331.632 23.0309 330.749C21.3719 329.866 19.4886 329.64 17.6967 330.109C15.9049 330.578 14.3135 331.714 13.1895 333.325L16.7676 339.273L11.8786 336.116C11.4995 337.46 11.4183 338.885 11.6419 340.271Z"
								fill="#57B894" />
							<path
								d="M11.972 339.095C12.2907 341.099 13.2234 342.92 14.6136 344.254C16.0038 345.588 17.7669 346.353 19.6074 346.422C21.4478 346.49 23.2536 345.858 24.7218 344.63C26.1901 343.402 27.2316 341.654 27.6716 339.679C28.1117 337.704 27.9235 335.622 27.1386 333.782C26.3538 331.942 25.02 330.456 23.361 329.573C21.702 328.691 19.8186 328.465 18.0268 328.934C16.2349 329.403 14.6436 330.538 13.5196 332.149L17.0976 338.098L12.2086 334.94C11.8296 336.284 11.7484 337.709 11.972 339.095V339.095Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M282.464 221.287C287.978 221.287 292.448 214.897 292.448 207.015C292.448 199.133 287.978 192.744 282.464 192.744C276.95 192.744 272.479 199.133 272.479 207.015C272.479 214.897 276.95 221.287 282.464 221.287Z"
								fill="#2F2E41" />
							<path
								d="M336.79 221.611C342.304 221.611 346.774 215.222 346.774 207.34C346.774 199.458 342.304 193.068 336.79 193.068C331.276 193.068 326.806 199.458 326.806 207.34C326.806 215.222 331.276 221.611 336.79 221.611Z"
								fill="#2F2E41" />
							<path
								d="M329.155 249.506C329.155 255.954 321.003 261.183 310.949 261.183C300.894 261.183 292.742 255.954 292.742 249.506C292.742 243.921 298.856 239.25 307.026 238.108C308.326 237.919 309.637 237.826 310.949 237.829C313.147 237.822 315.339 238.083 317.485 238.608C324.31 240.288 329.155 244.537 329.155 249.506Z"
								fill="#2F2E41" />
							<path
								d="M284.813 218.044C290.328 218.044 294.798 211.654 294.798 203.772C294.798 195.89 290.328 189.5 284.813 189.5C279.299 189.5 274.829 195.89 274.829 203.772C274.829 211.654 279.299 218.044 284.813 218.044Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M339.139 218.368C344.653 218.368 349.123 211.978 349.123 204.096C349.123 196.214 344.653 189.824 339.139 189.824C333.624 189.824 329.154 196.214 329.154 204.096C329.154 211.978 333.624 218.368 339.139 218.368Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M313.297 257.94C323.353 257.94 331.504 252.712 331.504 246.263C331.504 239.814 323.353 234.586 313.297 234.586C303.242 234.586 295.091 239.814 295.091 246.263C295.091 252.712 303.242 257.94 313.297 257.94Z"
								stroke="#3F3D56" strokeMiterlimit="10" />
							<path
								d="M317.702 239.581C317.707 240.397 317.43 241.184 316.927 241.781C316.689 242.068 316.401 242.297 316.079 242.454C315.758 242.611 315.411 242.693 315.059 242.695H309.186C308.462 242.667 307.778 242.324 307.283 241.74C306.788 241.157 306.522 240.38 306.543 239.581C306.54 238.948 306.708 238.329 307.025 237.803C308.324 237.601 309.636 237.501 310.948 237.505C313.149 237.497 315.343 237.776 317.485 238.335C317.63 238.731 317.704 239.154 317.702 239.581Z"
								fill="white" />
							<path
								d="M284.814 203.123C286.435 203.123 287.75 201.671 287.75 199.879C287.75 198.088 286.435 196.636 284.814 196.636C283.192 196.636 281.877 198.088 281.877 199.879C281.877 201.671 283.192 203.123 284.814 203.123Z"
								fill="white" />
							<path
								d="M339.433 203.123C341.054 203.123 342.369 201.671 342.369 199.879C342.369 198.088 341.054 196.636 339.433 196.636C337.811 196.636 336.496 198.088 336.496 199.879C336.496 201.671 337.811 203.123 339.433 203.123Z"
								fill="white" />
							<path opacity="0.3"
								d="M342.369 233.613C343.991 233.613 345.306 232.16 345.306 230.369C345.306 228.578 343.991 227.126 342.369 227.126C340.747 227.126 339.433 228.578 339.433 230.369C339.433 232.16 340.747 233.613 342.369 233.613Z"
								fill="#E7D040" />
							<path opacity="0.3"
								d="M270.718 233.613C272.34 233.613 273.654 232.16 273.654 230.369C273.654 228.578 272.34 227.126 270.718 227.126C269.096 227.126 267.781 228.578 267.781 230.369C267.781 232.16 269.096 233.613 270.718 233.613Z"
								fill="#E7D040" />
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="631" height="379" fill="white" />
							</clipPath>
						</defs>
					</svg>

				</div>
        <div className='text-center'>
        <h1 className='text-sm md:text-base text-yellow-300 p-2 mb-4'>The stuff you were looking for doesn't exist</h1>
        <br />
        { error && (
          <div>
            <p className= 'text-danger'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
  )}
      </div>
				<a href="/"
					className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Retry</a>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default Error
