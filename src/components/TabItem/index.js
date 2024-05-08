import './index.css';

const TabItem = (props) => {
  const {
    tabDetails,
    changeProjectItemWRTactiveTabId,
    isSelectedApplyStyle,
  } = props;
  const { displayText, tabId } = tabDetails;

  const onchangeTabID = () => {
    changeProjectItemWRTactiveTabId(tabId);
  };

  const applyStyleIfTrue = isSelectedApplyStyle ? 'active-tab-btn' : '';

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${applyStyleIfTrue}`}
        onClick={onchangeTabID}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
