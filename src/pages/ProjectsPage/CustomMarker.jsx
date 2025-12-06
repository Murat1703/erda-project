import { OverlayView } from "@react-google-maps/api";

export const CustomMarker = ({ position, id, isActive }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div
        style={{
            minWidth: id=="luminor"?"140px" : id=="icon"? "100px": "120px",
            background:isActive == id?"#1D1D1B" : "#E5E3DA",
            padding: "12px 24px",
            borderRadius: "24px",
            transform: "translate(-50%, -100%)",
            whiteSpace: "nowrap",
        }}
      >
        <p style={{ fontSize: "16px", color: isActive == id?"#E5E3DA" :  "#1D1D1B", fontFamily:"TA Modern Times", textTransform: "uppercase" }}>
          {id}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" style={{
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            marginLeft: "-6px"
        }}>
            <path d="M6.4972 7.12713C6.09843 7.58759 5.38411 7.58759 4.98534 7.12713L0.246039 1.65465C-0.314837 1.00701 0.145216 -2.14228e-06 1.00197 -2.06738e-06L10.4806 -1.23873e-06C11.3373 -1.16383e-06 11.7974 1.00701 11.2365 1.65465L6.4972 7.12713Z" fill={isActive == id?"#1D1D1B" : "#E5E3DA"}/>
        </svg>

      </div>
    </OverlayView>
  );
};
