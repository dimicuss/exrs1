( $ => {
	const rests = [
		{
			color: "orange",
			name: "NAME",
			imgUrl: "../images/sea.png",
			webSiteUrl:"javascript:void(null)",
			description: "DESCRIPTION"
		},

		{
			color: "blue",
			name: "NAME",
			imgUrl: "../images/people1.png",
			webSiteUrl:"javascript:void(null)",
			description: "DESCRIPTION"
		},

		{
			color: "violet",
			name: "NAME",
			imgUrl: "../images/people2.png",
			webSiteUrl:"javascript:void(null)",
			description: "DESCRIPTION"
		},

		{
			color: "green",
			name: "NAME",
			imgUrl: "../images/people3.png",
			webSiteUrl:"javascript:void(null)",
			description: "DESCRIPTION"
		}
	]


	class Header extends React.Component {
		render() {
			return <header className="header">
				<div className="container">
					<div className="header__top clearfix">
						<div className="header__left clearfix inline">
							<img className="header__left__logo inline" src={this.props.imagesrc} alt="Not found"/>
							<div className="header__left__date-place inline">
								<div className="header__left__date">SEPTEMBER 16-14, 2016</div>
								<div className="header__left__place">MOSCOW, IEC / CROCUS EXPO</div>
							</div>
						</div>
						<div className="header__right inline-right">
							<div className="header__right__icons">
								<a href="javascript:void(null)" className="header__right__icon">
									<img src="../images/icon-tw.png" alt=""/>
									<div className="header__right__icon__topping topping"></div>
								</a>
								<a href="javascript:void(null)" className="header__right__icon">
									<img src="../images/icon-fb.png" alt=""/>
									<div className="header__right__icon__topping topping"></div>
								</a>
								<a href="javascript:void(null)" className="header__right__icon">
									<img src="../images/icon-b.png" alt=""/>
									<div className="header__right__icon__topping topping"></div>
								</a>
								<a href="javascript:void(null)" className="header__right__icon">
									<img src="../images/icon-gl.png" alt=""/>
									<div className="header__right__icon__topping topping"></div>
								</a>
								<a href="javascript:void(null)" className="header__right__icon">
									<img src="../images/icon-yt.png" alt=""/>
									<div className="header__right__icon__topping topping"></div>
								</a>
							</div>
							<div className="header__right__languages">
								<a className="header__right__language _selected" href="javascript:void(null)">ENGLISH</a>
								<span>&nbsp;|&nbsp;</span>
								<a className="header__right__language" href="javascript:void(null)">RUSSIAN</a>
							</div>
						</div>
					</div>
				</div>
				<nav className="header__nav">
					<div className="container">
						<a href="javascript:void(null)" className="header__nav__button _orange">OTDYKH LEISURE</a>&nbsp;
						<a href="javascript:void(null)" className="header__nav__button _blue">OTDYKH MICE</a>&nbsp;
						<a href="javascript:void(null)" className="header__nav__button _violet">OTDYKH LUXURY</a>&nbsp;
						<a href="javascript:void(null)" className="header__nav__button _green">OTDYKH SPA &amp; HEALTH</a>
					</div>
				</nav>
			</header>
		}
	}


	class Slider extends React.Component {
		componentDidMount() {
			const slider = $(ReactDOM.findDOMNode(this))
			slider.find('#slider-entry').sliderPro({
				width: '100%',
				arrows: true,
				buttons: false,
				autoHeight: true,
				slideDistance: 0
			})
		}

		renderSlides() {
			return this.props.slideUrls.map( (url, index) => {
				return <div key={index} className="slider__elm sp-slide">
					<img className="sp-image slider__image" src={url} alt="Not found"/>
				</div>
			})
		}

		render() {
			return <section className="slider">
				<div id="slider-entry">
					<div className="slider__slides sp-slides">
						{this.renderSlides()}
					</div>
				</div>
			</section>
		}
	}


	class Rest extends React.Component {
		render() {
			const
				mod = this.props.mod,
				color = this.props.color
			return <div className={`rest ${ mod ? '_' + mod : ''} inline`}>
				<div className="rest__name clearfix">
					<div className={`rest__name__text ${ color ? '_' + color: ''} inline`}>{this.props.name}</div>
					<img className="rest__name__img inline"src={this.props.imgUrl} alt="Not found"/>
				</div>
				<p className="rest__description">{this.props.description}</p>
				<div className="rest__link"><a href={this.props.webSiteUrl}>VISIT WEBSITE</a></div>
			</div>
		}
	}


	function RestContainer (options) {
		return <section className="rest-container container clearfix">
			{options.children}
		</section>
	}


	class Footer extends React.Component {
		render() {
			return <footer className="footer">
				<div className="footer__text container">
					<span className="footer__color-middle">© 1995-2016 | Euroexpo company.</span>&nbsp;
					<span className="footer__color-light">OTDYKH Organizer</span>
				</div>
			</footer>
		}
	}


	$(() => {
		let parity = (rests.length % 2) > 0 ? 0 : 1

		ReactDOM.render(
			<div>
				<Header imagesrc="../images/logo.png"/>
				<Slider slideUrls={[
				  '../images/heart.png',
				  '../images/heart.png',
				  '../images/heart.png',
				  '../images/heart.png'
				]}/>
				<RestContainer>
					{
						rests.map( ({mod, color, name, imgUrl, webSiteUrl, description}, index) => {
							const left = rests.length - (index + 1)
							return <Rest
								key={index}
								mod={left <= parity ? 'last': ''}
								color={color}
								name={name}
								imgUrl={imgUrl}
								webSiteUrl={webSiteUrl}
								description={description} />
						})
					}
				</RestContainer>
				<Footer/>
			</div>,
			document.querySelector( '#react-entry' )
		)
	})
})(jQuery)