export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">QueerLuxe Travel</h3>
            <p className="text-gray-400">Where Luxury Meets Liberation</p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Paris</li>
              <li>Tokyo</li>
              <li>Cape Town</li>
              <li>New York</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Luxury Hotels</li>
              <li>Private Tours</li>
              <li>Events</li>
              <li>Consultations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 QueerLuxe Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
