import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navLink"]

  connect() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  disconnect() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    const heroSection = document.querySelector('.hero')
    if (!heroSection) return

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
    const scrollPosition = window.scrollY + this.element.offsetHeight

    if (scrollPosition < heroBottom) {
      this.element.classList.add('text-white')
      this.element.classList.remove('text-base-content')
    } else {
      this.element.classList.remove('text-white')
      this.element.classList.add('text-base-content')
    }
  }
} 