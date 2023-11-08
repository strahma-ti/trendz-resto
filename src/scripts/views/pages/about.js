const About = {
  async render() {
    return `
    <div class="about-container">
        <h2 class="about-title">About Us</h2>
        <p class="about-paragraph">Welcome to Trendz-Resto, your ultimate destination for discovering the best restaurants in town. We are passionate food enthusiasts who are dedicated to helping you explore and enjoy the culinary treasures of our city.</p>

        <p class="about-paragraph">Our mission is to provide you with a comprehensive list of restaurants, along with detailed reviews and ratings from both our expert team and fellow diners. Whether you're a foodie on the hunt for your next memorable meal or a traveler looking for the perfect dining spot, we've got you covered.</p>

        <p class="about-paragraph">What sets Trendz-Resto apart is our commitment to delivering honest, unbiased, and informative restaurant reviews. We believe in the power of community and the importance of sharing dining experiences, so you can make informed choices when it comes to your dining adventures.</p>

        <p class="about-paragraph">Feel free to browse our extensive database of restaurants, read insightful reviews, and leave your own ratings and comments to help others make their dining decisions. Our user-friendly platform is designed to make your restaurant discovery journey both enjoyable and convenient.</p>

        <p class="about-paragraph">Thank you for choosing Trendz-Resto as your trusted guide to the culinary world. We look forward to being a part of your food explorations and helping you find the perfect dining experiences.</p>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
