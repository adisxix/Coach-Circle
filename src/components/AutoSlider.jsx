export default function AutoSlider({ items, direction = 'ltr', speed = 30, renderItem }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={direction === 'ltr' ? 'slider-ltr' : 'slider-rtl'}
        style={{
          display: 'flex',
          gap: '1.5rem',
          width: 'max-content',
          '--slider-speed': `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
