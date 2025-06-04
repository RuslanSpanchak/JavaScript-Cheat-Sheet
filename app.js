// ---------- Input: CheckBox та Radio
const checkBox = document.getElementById('checkBox')
const checkBoxText = document.getElementById('checkBoxText')

const radio = document.getElementsByName('radio')
const radioBtn = document.getElementById('radioBtn')
const radioText = document.getElementById('radioText')

checkBox.addEventListener("change", function() {
	checkCheckBox()
})

function checkCheckBox() {
	if (checkBox.checked) {
		checkBoxText.innerText = 'Active'
	} else {
		checkBoxText.innerText = 'Not Active'
	}
}

radioBtn.addEventListener("click", function() {
	checkRadio()
})

function checkRadio() {
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			radioText.innerText = 'Selected ' + i + ' element'
		}
	}
}

// ---------- Select та Input: Range
const select = document.getElementById('select')
const selectText = document.getElementById('selectText')

const range = document.getElementById('range')
const rangeNumber = document.getElementById('rangeNumber')
const rangeSize = document.getElementById('rangeSize')

select.addEventListener("change", function(event) {
	checkSelect(event)
})

function checkSelect(event) {
	selectText.innerText = "Selected option: " + event.target.options[event.target.selectedIndex].text
}

range.addEventListener("input", function() {
	inputValue()
	changeSize()
})

rangeNumber.addEventListener("input", function() {
	rangeValue()
	changeSize()
})

function inputValue() {
	rangeNumber.value = range.value
}

function rangeValue() {
	range.value = rangeNumber.value
}

function changeSize() {
	rangeSize.style.width = range.value + 'px'
}

// ---------- Border Radius generator
const rangeTopLeft = document.getElementById('rangeTopLeft')
const rangeTopRight = document.getElementById('rangeTopRight')
const rangeBottomLeft = document.getElementById('rangeBottomLeft')
const rangeBottomRight = document.getElementById('rangeBottomRight')
const textTopLeft = document.getElementById('textTopLeft')
const textTopRight = document.getElementById('textTopRight')
const textBottomLeft = document.getElementById('textBottomLeft')
const textBottomRight = document.getElementById('textBottomRight')

const borderRadiusSquare = document.getElementById('borderRadiusSquare')

rangeTopLeft.addEventListener("input", function() {
	textTopLeft.value = rangeTopLeft.value
	borderRadiusSquare.style.borderTopLeftRadius = rangeTopLeft.value + 'px'
})

rangeTopRight.addEventListener("input", function() {
	textTopRight.value = rangeTopRight.value
	borderRadiusSquare.style.borderTopRightRadius = rangeTopRight.value + 'px'
})

rangeBottomLeft.addEventListener("input", function() {
	textBottomLeft.value = rangeBottomLeft.value
	borderRadiusSquare.style.borderBottomLeftRadius = rangeBottomLeft.value + 'px'
})

rangeBottomRight.addEventListener("input", function() {
	textBottomRight.value = rangeBottomRight.value
	borderRadiusSquare.style.borderBottomRightRadius = rangeBottomRight.value + 'px'
})

textTopLeft.addEventListener("input", function() {
	rangeTopLeft.value = textTopLeft.value
	borderRadiusSquare.style.borderTopLeftRadius = textTopLeft.value + 'px'
})

textTopRight.addEventListener("input", function() {
	rangeTopRight.value = textTopRight.value
	borderRadiusSquare.style.borderTopRightRadius = textTopRight.value + 'px'
})

textBottomLeft.addEventListener("input", function() {
	rangeBottomLeft.value = textBottomLeft.value
	borderRadiusSquare.style.borderBottomLeftRadius = textBottomLeft.value + 'px'
})

textBottomRight.addEventListener("input", function() {
	rangeBottomRight.value = textBottomRight.value
	borderRadiusSquare.style.borderBottomRightRadius = textBottomRight.value + 'px'
})

// ---------- Drop-Down Menu
const dropDownItems = document.querySelectorAll('.drop_down_nav_item')

dropDownItems.forEach(function(item) {
	const dropDownSubMenu = item.querySelector('.drop_down_nav_submenu')

	item.addEventListener("mouseenter", function() {
		if (dropDownSubMenu) {
			dropDownSubMenu.classList.add('drop_down_submenu_active')
		}
	})
	item.addEventListener("mouseleave", function() {
		if (dropDownSubMenu) {
			dropDownSubMenu.classList.remove('drop_down_submenu_active')
		}
	})
})

// ---------- Tabs
const tabsBtn = document.querySelectorAll('.tab')
const tabsContent = document.querySelectorAll('.tabs_content')
const tabsContentInner = document.querySelector('.tabs_content_inner')

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		const currentTabBtn = item
		const tabId = currentTabBtn.getAttribute('data-tab')
		const currentContent = document.querySelector(tabId)

		if (!currentTabBtn.classList.contains('tab_active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('tab_active')
			})
			tabsContent.forEach(function(item) {
				item.classList.remove('tabs_content_active')
			})

			currentTabBtn.classList.add('tab_active')
			currentContent.classList.add('tabs_content_active')
		}

		if (tabId === '#tab_2' || tabId === '#tab_3') {
			tabsContentInner.style.borderRadius = '5px'
		} else {
			tabsContentInner.style.borderRadius = '0px 5px 5px 5px'
		}
	})
})

document.querySelector('.tab').click()

// ---------- Modal Window
const modalOpenBtn = document.getElementById('modalOpenBtn')
const modalCloseBtn = document.getElementById('modalCloseBtn')
const modalWindow = document.getElementById('modalWindow')

modalOpenBtn.addEventListener("click", function() {
	modalWindow.style.display = 'flex'
	document.body.classList.add('modal-open')
})

modalCloseBtn.addEventListener("click", function() {
	modalWindow.style.display = 'none'
	document.body.classList.remove('modal-open')
})

window.addEventListener("click", function(event) {
	if (event.target == modalWindow) {
		modalWindow.style.display = 'none'
		document.body.classList.remove('modal-open')
	}
})

// ---------- Move Animation
const animationSquare = document.getElementById('animationSquare')
const animationBtn = document.getElementById('animationBtn')

animationBtn.addEventListener("click", function() {
	animationSquare.classList.toggle('animation_move')
})

// ---------- Slider
const slidesSlider = document.querySelectorAll('.slider_item')
const dotsSlider = document.querySelectorAll('.slider_dot')
const prevBtn = document.getElementById('sliderPrev')
const nextBtn = document.getElementById('sliderNext')

let currentSlide = 0

function showSlide(index) {
	if (index >= slidesSlider.length) {
		currentSlide = 0
	} else if (index < 0) currentSlide = slidesSlider.length - 1
	else {
		currentSlide = index
	} 

	slidesSlider.forEach((slide, i) => {
		slide.style.display = i === currentSlide ? 'block' : 'none'
		dotsSlider[i].classList.toggle('slider_dot_active', i === currentSlide)
	})
}

showSlide(currentSlide)

nextBtn.addEventListener("click", () => {
	showSlide(currentSlide + 1)
})

prevBtn.addEventListener("click", () => {
	showSlide(currentSlide - 1)
})

dotsSlider.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		showSlide(index)
	})
})

// ---------- User Filtering
const filterUserList = document.getElementById('filterUserList')
const filterInput = document.getElementById('filterInput')
let filterUsersArray = []

filterInput.addEventListener("input", function(event) {
	const filterInputValue = event.target.value.toLowerCase()
	const filteredUsers = filterUsersArray.filter(function(user) {
		return user.name.toLowerCase().includes(filterInputValue)
	})

	renderUserList(filteredUsers)
})

async function startUserFilter() {

	try {
		const resp = await fetch("https://jsonplaceholder.typicode.com/users")
		const data = await resp.json()

		setTimeout(() => {
			filterUsersArray = data
			renderUserList(data)
		}, 1500)
	} catch (error) {
		filterUserList.innerHTML = error
		filterUserList.style.color = 'red'
	}
	
}

function renderUserList(users = []) {

	if (users.length == 0) {
		filterUserList.innerHTML = `<div class="filter_user filter-user-empty">No users found :(</div>`
	} else {
		const htmlUserList = users.map(toHTMLuserList).join('')
	filterUserList.innerHTML = htmlUserList
	}

}

function toHTMLuserList(user) {
	return `<div class="filter_user_list" id="filterUserList">
				<div class="filter_user">${user.name}</div>
			</div>`
}

startUserFilter()

// ---------- Calculator
const inputCalculator1 = document.getElementById('inputCalculator1')
const inputCalculator2 = document.getElementById('inputCalculator2')
const plusClaculator = document.getElementById('plusClaculator')
const minusClaculator = document.getElementById('minusClaculator')
const multiplicationClaculator = document.getElementById('multiplicationClaculator')
const divisionClaculator = document.getElementById('divisionClaculator')
const submitCalculator = document.getElementById('submitCalculator')
const resultCalculator = document.getElementById('resultCalculator')
const operatorsBtns = document.querySelectorAll('.operator')

let actionCalculator = null

operatorsBtns.forEach(function(operator) {
	operator.addEventListener("click", function() {
		operatorsBtns.forEach(function(btn) {
			btn.classList.remove('active')
		})

		operator.classList.add('active')
	})
})

plusClaculator.addEventListener("click", function() {
	actionCalculator = '+'
	submitCalculator.textContent = 'Calculate addition'
})

minusClaculator.addEventListener("click", function() {
	actionCalculator = '-'
	submitCalculator.textContent = 'Calculate subtraction'
})

multiplicationClaculator.addEventListener("click", function() {
	actionCalculator = '*'
	submitCalculator.textContent = 'Calculate multiplication'
})

divisionClaculator.addEventListener("click", function() {
	actionCalculator = '/'
	submitCalculator.textContent = 'Calculate division'
})

function computeNumbersWithAction(input1, input2, action) {
	input1 = Number(inputCalculator1.value)
	input2 = Number(inputCalculator2.value)

	if (action === '+') {
		return input1 + input2
	} else if (action === '-') {
		return input1 - input2
	} else if (action === '*') {
		return input1 * input2
	} else if (action === '/') {
		return input1 / input2
	}
}

function printResultClaculator(printResult) {
	if (printResult > 0) {
		resultCalculator.style.color = 'green'
	} else if (printResult < 0) {
		resultCalculator.style.color = 'red'
	} else if (printResult === 0) {
		resultCalculator.style.color = 'black'
	}

	resultCalculator.textContent = printResult
}

submitCalculator.addEventListener("click", function() {
	const submitResult = computeNumbersWithAction(inputCalculator1, inputCalculator2, actionCalculator)

	if (submitResult === undefined) {
		resultCalculator.style.color = 'red'
		resultCalculator.textContent = 'Choose an action'
	} else {
		printResultClaculator(submitResult)
	}
})

// ---------- Modal Images
const modalImages = document.querySelectorAll('.modal-img')
const modalImagesWindow = document.getElementById('modalImagesWindow')
const modalImgInner = document.getElementById('modalImgInner')
const modalImg = document.getElementById('modalImg')
const modalImgCaption = document.getElementById('modalImgCaption')

modalImages.forEach(function(img) {
	img.addEventListener("click", function() {
		modalImagesWindow.style.display = 'flex'
		modalImg.src = img.src
		modalImgCaption.textContent = img.alt
		document.body.classList.add('modal-open')
	})
})

window.addEventListener("click", function(event) {
	if (event.target == modalImagesWindow || event.target == modalImgInner) {
		modalImagesWindow.style.display = 'none'
		document.body.classList.remove('modal-open')
	}
})

// ---------- Progress Bar
const progressBarInner = document.getElementById('progressBarInner')
const progressBar = document.getElementById('progressBar')
const progressLabel = document.getElementById('progressLabel')
const progressBtn = document.getElementById('progressBtn')
const progressResetBtn = document.getElementById('progressResetBtn')

let progressCompleted = false

function progressMove() {
	let progressWidth = 0
	progressBar.style.backgroundColor = '#2196F3'
	progressLabel.style.color = '#fff'
	let progressInterval = setInterval(function() {
		if (progressWidth === 100) {
			clearInterval(progressInterval)
			progressBar.style.backgroundColor = '#4CAF50'
			progressCompleted = true
		} else {
			progressWidth++
			progressBar.style.width = progressWidth + '%'
			progressLabel.textContent = progressWidth + '%'
		}
	}, 15)
}

function progressReset() {
	progressLabel.style.color = '#000'
	progressLabel.textContent = '0%'
	progressBar.style.width = 100 + '%'
	progressBar.style.backgroundColor = '#fff'
}

function progressBarBtns(none, flex) {
	none.style.display = 'none'
	flex.style.display = 'flex'
}

progressBtn.addEventListener("click", function() {
	progressBarBtns(progressBtn, progressResetBtn)
	progressMove()
})

progressResetBtn.addEventListener("click", function() {
	if (progressCompleted) {
		progressBarBtns(progressResetBtn, progressBtn)
		progressReset()
		progressCompleted = false
	}
})

// ---------- Popup
const popupItems = document.querySelectorAll('.popup_item')

popupItems.forEach(function(item) {
	const popupName = item.querySelector('.popup_name')
	const popupContent = item.querySelector('.popup_content')

	popupName.addEventListener("click", function(e) {
		e.stopPropagation()

		document.querySelectorAll('.popup_content').forEach(function(p) {
			if (p !== popupContent) {
				p.style.display = 'none'
			}
		})

		if (popupContent.style.display === 'block') {
			popupContent.style.display = 'none'
		} else {
			popupContent.style.display = 'block'
		}
	})
})

document.addEventListener("click", function() {
	document.querySelectorAll('.popup_content').forEach(function(p) {
		p.style.display = 'none'
	})
})

// ---------- Accordion
const accordionTitles = document.querySelectorAll('.accordion_title')

accordionTitles.forEach(function(title) {
	title.addEventListener("click", function() {
		const currentAccordionItem = title.closest('.accordion_item')
		const accordionContent = currentAccordionItem.querySelector('.accordion_content')
		const accordionArrow = title.querySelector('.accordion_arrow')

		const isAccordionOpen = accordionContent.classList.contains('active')

		if (isAccordionOpen) {
			accordionContent.classList.remove('active')
			accordionArrow.classList.remove('active')
		} else {
			accordionContent.classList.add('active')
			accordionArrow.classList.add('active')
		}
	})
})

// ---------- Currency Conventer
const exchangeRates = {
	EUR: {
		USD: 1.08, UAH: 43.0, JPY: 170
	},
	USD: {
		EUR: 0.93, UAH: 40.0, JPY: 157
	},
	UAH: {
		EUR: 0.023, USD: 0.025, JPY: 3.95
	},
	JPY: {
		EUR: 0.0059, USD: 0.0064, UAH: 0.25
	}
}

const currencyBlocks = document.querySelectorAll('.conventer_item')

currencyBlocks.forEach(function(block) {
	const currencyInner = block.querySelector('.conventer_currency_inner')
	const currencyChoose = block.querySelector('.conventer_currency_choose_inner')
	const currencyName = currencyInner.querySelector('.currency_name')
	const currencyInput = block.querySelector('.conventer_input')

	currencyInner.addEventListener("click", function() {
		const isVisible = currencyChoose.style.display === 'flex'
		document.querySelectorAll('.conventer_currency_choose_inner').forEach(function(el) {
			el.style.display = 'none'
		})
		if (isVisible) {
			currencyChoose.style.display = 'none'
		} else {
			currencyChoose.style.display = 'flex'
		}
	})

	currencyChoose.querySelectorAll('.currency_choose_item').forEach(function(item) {
		item.addEventListener("click", function() {
			const newCurrency = item.querySelector('.currency_full_name')
			const newCode = 
						item.querySelector('img').src.includes('european-union') ? 'EUR' :
						item.querySelector('img').src.includes('ukraine') ? 'UAH' :
						item.querySelector('img').src.includes('united-states') ? 'USD' : 'JPY'

			currencyName.textContent = newCode
			currencyInner.querySelector('img').src = item.querySelector('img').src
			currencyChoose.style.display = 'none'

			convert()
		})
	})

	currencyInput.addEventListener("input", function() {
		convert()
	})
})

function convert() {
	const input1 = currencyBlocks[0].querySelector('.conventer_input')
	const input2 = currencyBlocks[1].querySelector('.conventer_input')

	const currency1 = currencyBlocks[0].querySelector('.currency_name').textContent
	const currency2 = currencyBlocks[1].querySelector('.currency_name').textContent

	const amount = parseFloat(input1.value)
	if (!isNaN(amount) && exchangeRates[currency1] && exchangeRates[currency1][currency2]) {
		const rate = exchangeRates[currency1][currency2]
		input2.value = (amount * rate).toFixed(3)
	} else {
		input2.value = ''
	}
}

document.addEventListener("click", function(e) {
  	if (!e.target.closest('.conventer_currency_inner') && !e.target.closest('.conventer_currency_choose_inner')) {
    	document.querySelectorAll('.conventer_currency_choose_inner').forEach(function(el) {
    		el.style.display = 'none'
    	})
  	}
})

const conventerArrow = document.querySelector('.conventer_arrow_img')

conventerArrow.addEventListener("click", function() {
	conventerArrow.classList.toggle('active')

	const block1 = currencyBlocks[0]
	const block2 = currencyBlocks[1]

	const code1 = block1.querySelector('.currency_name').textContent
	const code2 = block2.querySelector('.currency_name').textContent

	const img1 = block1.querySelector('.currency_img').src
	const img2 = block2.querySelector('.currency_img').src

	block1.querySelector('.currency_name').textContent = code2
	block2.querySelector('.currency_name').textContent = code1

	block1.querySelector('.currency_img').src = img2
	block2.querySelector('.currency_img').src = img1

	const input1 = block1.querySelector('.conventer_input')
	const input2 = block2.querySelector('.conventer_input')

	const value1 = input1.value
	const value2 = input2.value

	input1.value = value2
	input2.value = value1

	convert()
})

currencyBlocks[0].querySelector('.conventer_input').value = 1
currencyBlocks[1].querySelector('.conventer_input').value = ''

convert()

// ---------- To Do List
const toDoInput = document.getElementById('toDoInput')
const toDoAddBtn = document.getElementById('toDoAddBtn')
const toDoList = document.getElementById('toDoList')

const toDoArray = []

toDoAddBtn.addEventListener("click", () => {
	if (toDoInput.value.length === 0 || toDoInput.value.trim().length === 0) {
		return
	}

	const newTask = {
		title: toDoInput.value,
		isCompleted: false
	}
	toDoArray.push(newTask)

	toDoRender()

	toDoInput.value = ''
})

toDoList.addEventListener("click", function(event) {
	const target = event.target.closest('[data-index]')
	if (target) {
		const index = Number(target.dataset.index)
		const type = target.dataset.type

		if (type === 'toggle') {
			toDoArray[index].isCompleted = !toDoArray[index].isCompleted
		} else if (type === 'delete') {
			toDoArray.splice(index, 1)
		}

		toDoRender()
	}
})

function toDoRender() {
	toDoList.innerHTML = ''

	if (toDoArray.length === 0) {
		toDoList.innerHTML = `
			<div class="todo_item todo-empty">
				<div class="todo_name todo-name-empty">There are no items yet :(</div>
			</div>
		`
	}

	for (let i = 0; i < toDoArray.length; i++) {
		toDoList.insertAdjacentHTML('beforeend', getTaskTemplate(toDoArray[i], i))
	}
}

function getTaskTemplate(task, index) {
	return `
		<div class="todo_item">
			<div class="todo_name ${task.isCompleted ? 'todo-name-through' : ''}">${task.title}</div>
			<div class="todo_btns_inner">
				<div data-index="${index}" data-type="toggle" class="todo_btn ${task.isCompleted ? 'todo-check-active-btn' : 'todo-check-btn'}">
					<img src="check.png" alt="">
				</div>
				<div data-index="${index}" data-type="delete" class="todo_btn todo-delete-btn">
					<img src="close.png" alt="">
				</div>
			</div>
		</div>
	`
}