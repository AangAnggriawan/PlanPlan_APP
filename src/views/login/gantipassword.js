import axios from 'axios';
import Api from '../../scripts/global/api';

const gantipass = {
  async render() {
    return `
    <main class="flex items-center justify-center h-screen bg-sky-50">
        <div class="flex flex-col items-center content-center justify-center max-w-lg grow">
            <img class="w-24 md:w-32" src="./images/logo.jpg" alt="Logo Plan Plan" />
            <p class="px-2 mb-2 text-2xl font-bold text-center text-sky-900">Lupa Password?</p>
            <p class="px-2 mb-2 text-base font-normal text-center text-sky-900">Silakan masukkan Email anda</p>
            
            <form id="change-password" class="w-2/3 mx-auto">
                <div class="flex justify-center mt-5">
                    <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="Error_input"></p>
                </div>
                <label for="password" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Kata Sandi Baru</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                    </svg>
                    </div>
                    <input type="newpassword" id="newpassword" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Kata Sandi" required />
                </div>
                <label for="password" class="block mt-2 mb-2 text-sm font-bold text-sky-900">konfirmasi Kata Sandi</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                    </svg>
                    </div>
                    <input type="konfirmpassword" id="konfirmpassword" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Kata Sandi" required />
                </div>
                <label for="token" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Token</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    </div>
                    <input type="token" id="token" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Kata Sandi" required />
                </div>
                <button type="button" id="changepass" class="w-full text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6" onclick="resetpassword()">
                    Kirim
                </button>  
            </form>  
        </div>
    </main>
    `;
  },

  async afterRender() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const veriftoken = `${Api.cektokenUrl}${token}`;
    console.log(token);
    axios.get(veriftoken)
      .then(() => {
      }).catch((error) => {
        console.error(error.response.data.message);
      });
    const changepass = `${Api.resetUrl}`;
    const newpassword = document.getElementById('newpassword').value;
    const konfimpassword = document.getElementById('changepass').value;
    const bodychange = {
      new_password: newpassword,
      new_password_confirmation: konfimpassword,
      token,
    };

    axios.post(changepass, bodychange, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      const message = document.getElementById('Error_input');
      message.innerHTML = response.data.message;
      window.location.replace('./login.html#/masuk');
    }).catch((error) => {
      const message = document.getElementById('Error_input');
      message.innerHTML = error.response.data.message;
    });
  },
};

export default gantipass;
