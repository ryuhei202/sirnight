type TProps = {
  readonly memberId: number;
};

export const AffiliateScript = ({ memberId }: TProps) => {
  return (
    <>
      {/* もしもアフィリエイトコンバージョンタグ */}
      <script
        src={`https://r.moshimo.com/af/r/result.js?p_id=1063&pc_id=1537&m_v=${memberId}`}
        id="msmaf"
      ></script>
      <noscript>
        <img
          src={`https://r.moshimo.com/af/r/result?p_id=1063&pc_id=1537&m_v=${memberId}`}
          width="1"
          height="1"
          alt=""
        />
      </noscript>
      {/* もしもアフィリエイトコンバージョンタグ */}
    </>
  );
};
