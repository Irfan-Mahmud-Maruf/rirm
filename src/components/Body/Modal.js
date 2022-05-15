import React from 'react'

const Modal = ({state,setState}) => {
    
  return (
    state ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3">
                    <div class="mb-6 flex justify-center items-center">
                        <label for="email" class="block mb-2 text-sm font-medium text-dark mr-3">To</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div> 
                    <div class="mb-6 flex justify-center items-center">
                        <label for="email" class="block mb-2 text-sm font-medium text-dark mr-3">CC</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div> 
                    <div class="mb-6 ">
                        <label for="text" class="block mb-2 text-sm font-medium text-dark mr-3">Subject</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your subject..." required />
                    </div> 
                    <div class="mb-6 ">
                        
                        <label for="message" class="block mb-2 text-sm font-medium text-dark mr-3">Your message</label>
                        <textarea id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your message..."></textarea>

                    </div> 
                        
                </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                        <button className="w-full mt-2 p-2.5 flex-1 text-white bg-green-400 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setState(false)}
                        >
                            Send
                        </button>
                        <button className="w-full mt-2 p-2.5 flex-1 text-green-400 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setState(false)}
                        >
                            Draft
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : ''
)
}

export default Modal