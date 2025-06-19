'use client';

export default function Home() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>サンプルアプリ</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
          このアプリは、ユーザーの生活をより便利にするための革新的なソリューションを提供します。
        </p>
        
        <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
          直感的なインターフェースと強力な機能を組み合わせ、日常のタスクを効率的に管理できるように設計されています。
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '15px' }}>主な機能</h2>
        <ul style={{ fontSize: '1.1em', paddingLeft: '20px' }}>
          <li>直感的で使いやすいインターフェース</li>
          <li>高速で安定したパフォーマンス</li>
          <li>オフラインでも使用可能</li>
          <li>プライバシーを重視した設計</li>
          <li>定期的なアップデートとサポート</li>
        </ul>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '15px' }}>ダウンロード</h2>
        <p style={{ fontSize: '1.1em' }}>
          <a href="https://apps.apple.com/app/your-app-id" style={{ color: '#007AFF', textDecoration: 'none' }}>
            App Storeでダウンロード
          </a>
          {' | '}
          <a href="https://play.google.com/store/apps/details?id=your.app.package" style={{ color: '#007AFF', textDecoration: 'none' }}>
            Google Playでダウンロード
          </a>
        </p>
      </div>

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px', fontSize: '0.9em', color: '#666' }}>
        <p>&copy; 2024 サンプルアプリ. All rights reserved.</p>
      </div>
    </div>
  );
} 