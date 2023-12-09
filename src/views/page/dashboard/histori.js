import '../../../styles/index.css';

const Histori = {
  async render() {
    return `
            <h1>Hallo Histori</h1>
            `;
  },

  async afterRender() {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken === null) {
      window.location.replace('./login.html#/masuk');
    }
  },
};

export default Histori;
