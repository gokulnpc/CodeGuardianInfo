import { useState, useEffect } from "react";

const codeSnippets = [
  {
    code: `vulnerable_app.py(30, 5): Vulnerable code: filename = request.files['file'].filename

(variable) filename: Any

View Problem (⌘F8)   Quick Fix... (⌘.)   Fix using Copilot (⌘!)`,
    issue: "Path Traversal Vulnerability [MEDIUM]",
    details: "CodeGuardian(PATH_TRAVERSAL)",
    fix: `@app.route('/download')
def download():
    # Fixed: Using secure filename validation
    filename = secure_filename(request.files['file'].filename)
    safe_path = os.path.join(UPLOAD_FOLDER, filename)
    return send_file(safe_path)`,
  },
  {
    code: `@app.route('/profile')
def profile():
    # Cross-site scripting (XSS) vulnerability
    name = request.args.get('name', '')

vulnerable_app.py 3 of 4 problems

Cross-Site Scripting (XSS) Vulnerability [MEDIUM]
CodeGuardian(CROSS_SITE_SCRIPTING_XSS))`,
    issue: "Cross-Site Scripting (XSS) Vulnerability [MEDIUM]",
    details: "Unsanitized user input directly rendered in HTML",
    fix: `@app.route('/profile')
def profile():
    # Fixed: Escaped user input to prevent XSS
    name = escape(request.args.get('name', ''))
    return render_template('profile.html', name=name)`,
  },
];

export default function CodePreview() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [showFix, setShowFix] = useState(false);

  useEffect(() => {
    const snippetTimer = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
      setShowFix(false);
    }, 4000);

    const fixTimer = setInterval(() => {
      setShowFix((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(snippetTimer);
      clearInterval(fixTimer);
    };
  }, []);

  const snippet = codeSnippets[currentSnippet];

  return (
    <div className="bg-dark-800 rounded-lg shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-dark-900">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-dark-400 text-sm">vulnerable_app.py</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="px-2 py-1 rounded text-xs bg-primary-500/10 text-primary-400">
            CodeGuardian Active
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="relative">
          <pre className="font-mono text-sm bg-dark-900/50 p-4 rounded-lg overflow-x-auto">
            <code className="block text-dark-200">
              {showFix ? snippet.fix : snippet.code}
            </code>
          </pre>

          <div
            className={`mt-4 transition-all duration-300 ${
              showFix ? "opacity-100" : "opacity-0"
            }`}
          >
            {showFix ? (
              <div className="flex items-start space-x-2 text-green-400 bg-green-900/20 p-3 rounded-lg">
                <svg
                  className="w-5 h-5 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="font-medium">Vulnerability Fixed</p>
                  <p className="text-sm opacity-90 mt-1">
                    Implemented secure coding practices to prevent security
                    issues
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-2 text-red-400 bg-red-900/20 p-3 rounded-lg">
                <svg
                  className="w-5 h-5 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div>
                  <p className="font-medium">{snippet.issue}</p>
                  <p className="text-sm opacity-90 mt-1">{snippet.details}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-dark-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Live Analysis</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-primary-400 transition-colors">
              View Details
            </button>
            <button className="hover:text-primary-400 transition-colors">
              Quick Fix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
