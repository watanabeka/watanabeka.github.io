'use client';

export default function Home() {
  const apps = [
    {
      name: '学校鬼ごっこ',
      icon: '/icons/schooltag-icon.png',
      iconType: 'image',
      description: '学校中で鬼ごっこ！ハンターからの逃走！',
      url: 'https://apps.apple.com/jp/app/id6447741245',
    },
    {
      name: '街鬼',
      icon: '/icons/citytag-icon.png',
      iconType: 'image',
      description: '街中で繰り広げる追いかけっこ',
      url: 'https://apps.apple.com/jp/app/id6502356451',
    },
    {
      name: 'AI画像の曲名クイズ',
      icon: '/icons/ai-music-quiz-icon.png',
      iconType: 'image',
      description: '曲名からAI画像が生成したイラストを曲名を当てよう！',
      url: 'https://apps.apple.com/jp/app/id6747633942',
    },
  ];

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px 15px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(1.8em, 5vw, 2.5em)', 
        marginBottom: '10px',
        textAlign: 'center',
        color: '#333'
      }}>
        アプリ一覧
      </h1>
      <p style={{ 
        fontSize: 'clamp(1em, 3vw, 1.2em)', 
        marginBottom: '30px',
        textAlign: 'center',
        color: '#666',
        padding: '0 10px'
      }}>
        楽しく便利なアプリをお楽しみください
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {apps.map((app, index) => (
          <div key={index} style={{
            border: '2px solid #e0e0e0',
            borderRadius: '15px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }} onClick={() => window.open(app.url, '_blank')}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '15px',
              flex: '1'
            }}>
              {app.iconType === 'image' ? (
                <img 
                  src={app.icon} 
                  alt={app.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    marginBottom: '12px',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <span style={{
                  fontSize: '3em',
                  marginBottom: '12px'
                }}>
                  {app.icon}
                </span>
              )}
              <div style={{ width: '100%' }}>
                <h2 style={{
                  fontSize: 'clamp(1.2em, 4vw, 1.5em)',
                  margin: '0 0 8px 0',
                  color: '#333',
                  wordBreak: 'break-word',
                  lineHeight: '1.3'
                }}>
                  {app.name}
                </h2>
                <p style={{
                  margin: '0',
                  color: '#666',
                  fontSize: 'clamp(0.85em, 2.5vw, 0.95em)',
                  lineHeight: '1.5',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}>
                  {app.description}
                </p>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              marginTop: 'auto'
            }}>
              <span style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: 'clamp(0.85em, 2.5vw, 0.95em)',
                display: 'inline-block'
              }}>
                App Storeで見る →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 