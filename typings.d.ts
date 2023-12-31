declare module 'react-native-ico-cryptocurrency' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = '0xbtc' |
      '2give' |
      'aave' |
      'abt' |
      'act' |
      'actn' |
      'ada' |
      'add' |
      'adx' |
      'ae' |
      'aeon' |
      'aeur' |
      'agi' |
      'agrs' |
      'aion' |
      'algo' |
      'amb' |
      'amp' |
      'ampl' |
      'ankr' |
      'ant' |
      'apex' |
      'appc' |
      'ardr' |
      'arg' |
      'ark' |
      'arn' |
      'arnx' |
      'ary' |
      'ast' |
      'atm' |
      'atom' |
      'audr' |
      'auto' |
      'aywa' |
      'bab' |
      'bal' |
      'band' |
      'bat' |
      'bay' |
      'bcbc' |
      'bcc' |
      'bcd' |
      'bch' |
      'bcio' |
      'bcn' |
      'bco' |
      'bcpt' |
      'bdl' |
      'beam' |
      'bela' |
      'bix' |
      'blcn' |
      'blk' |
      'block' |
      'blz' |
      'bnb' |
      'bnt' |
      'bnty' |
      'booty' |
      'bos' |
      'bpt' |
      'bq' |
      'brd' |
      'bsd' |
      'bsv' |
      'btc' |
      'btcd' |
      'btch' |
      'btcp' |
      'btcz' |
      'btdx' |
      'btg' |
      'btm' |
      'bts' |
      'btt' |
      'btx' |
      'burst' |
      'bze' |
      'call' |
      'cc' |
      'cdn' |
      'cdt' |
      'cenz' |
      'chain' |
      'chat' |
      'chips' |
      'chsb' |
      'cix' |
      'clam' |
      'cloak' |
      'cmm' |
      'cmt' |
      'cnd' |
      'cnx' |
      'cny' |
      'cob' |
      'colx' |
      'comp' |
      'coqui' |
      'cred' |
      'crpt' |
      'crv' |
      'crw' |
      'cs' |
      'ctr' |
      'ctxc' |
      'cvc' |
      'd' |
      'dai' |
      'dash' |
      'dat' |
      'data' |
      'dbc' |
      'dcn' |
      'dcr' |
      'deez' |
      'dent' |
      'dew' |
      'dgb' |
      'dgd' |
      'dlt' |
      'dnt' |
      'dock' |
      'doge' |
      'dot' |
      'drgn' |
      'drop' |
      'dta' |
      'dth' |
      'dtr' |
      'ebst' |
      'eca' |
      'edg' |
      'edo' |
      'edoge' |
      'ela' |
      'elec' |
      'elf' |
      'elix' |
      'ella' |
      'emb' |
      'emc' |
      'emc2' |
      'eng' |
      'enj' |
      'entrp' |
      'eon' |
      'eop' |
      'eos' |
      'eqli' |
      'equa' |
      'etc' |
      'eth' |
      'ethos' |
      'etn' |
      'etp' |
      'eur' |
      'evx' |
      'exmo' |
      'exp' |
      'fair' |
      'fct' |
      'fil' |
      'fjc' |
      'fldc' |
      'flo' |
      'flux' |
      'fsn' |
      'ftc' |
      'fuel' |
      'fun' |
      'game' |
      'gas' |
      'gbp' |
      'gbx' |
      'gbyte' |
      'generic' |
      'gin' |
      'glxt' |
      'gmr' |
      'gno' |
      'gnt' |
      'gold' |
      'grc' |
      'grin' |
      'grs' |
      'grt' |
      'gsc' |
      'gto' |
      'gup' |
      'gusd' |
      'gvt' |
      'gxs' |
      'gzr' |
      'hight' |
      'hns' |
      'hodl' |
      'hot' |
      'hpb' |
      'hsr' |
      'ht' |
      'html' |
      'huc' |
      'husd' |
      'hush' |
      'icn' |
      'icp' |
      'icx' |
      'ignis' |
      'ilk' |
      'ink' |
      'ins' |
      'ion' |
      'iop' |
      'iost' |
      'iotx' |
      'iq' |
      'itc' |
      'jnt' |
      'jpy' |
      'kcs' |
      'kin' |
      'klown' |
      'kmd' |
      'knc' |
      'krb' |
      'ksm' |
      'lbc' |
      'lend' |
      'leo' |
      'link' |
      'lkk' |
      'loom' |
      'lpt' |
      'lrc' |
      'lsk' |
      'ltc' |
      'lun' |
      'maid' |
      'mana' |
      'matic' |
      'max' |
      'mcap' |
      'mco' |
      'mda' |
      'mds' |
      'med' |
      'meetone' |
      'mft' |
      'miota' |
      'mith' |
      'mkr' |
      'mln' |
      'mnx' |
      'mnz' |
      'moac' |
      'mod' |
      'mona' |
      'msr' |
      'mth' |
      'mtl' |
      'music' |
      'mzc' |
      'nano' |
      'nas' |
      'nav' |
      'ncash' |
      'ndz' |
      'nebl' |
      'neo' |
      'neos' |
      'neu' |
      'nexo' |
      'ngc' |
      'nio' |
      'nkn' |
      'nlc2' |
      'nlg' |
      'nmc' |
      'nmr' |
      'npxs' |
      'ntbc' |
      'nuls' |
      'nxs' |
      'nxt' |
      'oax' |
      'ok' |
      'omg' |
      'omni' |
      'one' |
      'ong' |
      'ont' |
      'oot' |
      'ost' |
      'ox' |
      'oxt' |
      'pac' |
      'part' |
      'pasc' |
      'pasl' |
      'pax' |
      'paxg' |
      'pay' |
      'payx' |
      'pink' |
      'pirl' |
      'pivx' |
      'plr' |
      'poa' |
      'poe' |
      'polis' |
      'poly' |
      'pot' |
      'powr' |
      'ppc' |
      'ppp' |
      'ppt' |
      'pre' |
      'prl' |
      'pungo' |
      'pura' |
      'qash' |
      'qiwi' |
      'qlc' |
      'qrl' |
      'qsp' |
      'qtum' |
      'r' |
      'rads' |
      'rap' |
      'rcn' |
      'rdd' |
      'rdn' |
      'ren' |
      'rep' |
      'repv2' |
      'req' |
      'rhoc' |
      'ric' |
      'rise' |
      'rlc' |
      'rpx' |
      'rub' |
      'rvn' |
      'ryo' |
      'safe' |
      'safemoon' |
      'sai' |
      'salt' |
      'san' |
      'sand' |
      'sbd' |
      'sberbank' |
      'sc' |
      'shift' |
      'sib' |
      'sin' |
      'skl' |
      'sky' |
      'slr' |
      'sls' |
      'smart' |
      'sngls' |
      'snm' |
      'snt' |
      'snx' |
      'soc' |
      'sol' |
      'spacehbit' |
      'spank' |
      'sphtx' |
      'srn' |
      'stak' |
      'start' |
      'steem' |
      'storj' |
      'storm' |
      'stox' |
      'stq' |
      'strat' |
      'stx' |
      'sub' |
      'sumo' |
      'sushi' |
      'sys' |
      'taas' |
      'tau' |
      'tbx' |
      'tel' |
      'ten' |
      'tern' |
      'tgch' |
      'theta' |
      'tix' |
      'tkn' |
      'tks' |
      'tnb' |
      'tnc' |
      'tnt' |
      'tomo' |
      'tpay' |
      'trig' |
      'trtl' |
      'trx' |
      'tusd' |
      'tzc' |
      'ubq' |
      'uma' |
      'uni' |
      'unity' |
      'usd' |
      'usdc' |
      'usdt' |
      'utk' |
      'veri' |
      'vet' |
      'via' |
      'vib' |
      'vibe' |
      'vivo' |
      'vrc' |
      'vrsc' |
      'vtc' |
      'vtho' |
      'wabi' |
      'wan' |
      'waves' |
      'wax' |
      'wbtc' |
      'wgr' |
      'wicc' |
      'wings' |
      'wpr' |
      'wtc' |
      'x' |
      'xas' |
      'xbc' |
      'xbp' |
      'xby' |
      'xcp' |
      'xdn' |
      'xem' |
      'xin' |
      'xlm' |
      'xmcc' |
      'xmg' |
      'xmo' |
      'xmr' |
      'xmy' |
      'xp' |
      'xpa' |
      'xpm' |
      'xpr' |
      'xrp' |
      'xsg' |
      'xtz' |
      'xuc' |
      'xvc' |
      'xvg' |
      'xzc' |
      'yfi' |
      'yoyow' |
      'zcl' |
      'zec' |
      'zel' |
      'zen' |
      'zest' |
      'zil' |
      'zilla' |
      'zrx';

    type iconColors = '#000000' |
      '#00004D' |
      '#000D2B' |
      '#001D57' |
      '#002342' |
      '#00316D' |
      '#004a80' |
      '#004ab5' |
      '#0050db' |
      '#005396' |
      '#005FFA' |
      '#005fff' |
      '#006149' |
      '#0061ff' |
      '#00688C' |
      '#006AD2' |
      '#006AE3' |
      '#0072FF' |
      '#008200' |
      '#0082c6' |
      '#00843D' |
      '#008CE7' |
      '#008DDE' |
      '#008FBB' |
      '#0092b5' |
      '#0093DD' |
      '#00A5FF' |
      '#00A6C4' |
      '#00A79D' |
      '#00A8D6' |
      '#00ACED' |
      '#00ADEF' |
      '#00AEE9' |
      '#00AEEF' |
      '#00AFEC' |
      '#00B0FF' |
      '#00B4F4' |
      '#00BFEC' |
      '#00CBFF' |
      '#00D395' |
      '#00D4D5' |
      '#00DCFA' |
      '#00E6A0' |
      '#00EA90' |
      '#00EAAB' |
      '#00FFBA' |
      '#00acff' |
      '#00aded' |
      '#00b098' |
      '#00bdcd' |
      '#00bfff' |
      '#0155ff' |
      '#01C38D' |
      '#01a64f' |
      '#01aef0' |
      '#033B4A' |
      '#044aac' |
      '#048657' |
      '#04ADEF' |
      '#050708' |
      '#051D2D' |
      '#0576B4' |
      '#057BC1' |
      '#05BCA9' |
      '#07BC9C' |
      '#080817' |
      '#080d98' |
      '#0899CD' |
      '#09547d' |
      '#0971FE' |
      '#0AF' |
      '#0B1529' |
      '#0B76FF' |
      '#0CAFA5' |
      '#0CF' |
      '#0D1E30' |
      '#0E0E21' |
      '#0F1529' |
      '#0FACF3' |
      '#0b1c26' |
      '#0d4ea0' |
      '#0dc9f7' |
      '#0f63d8' |
      '#0f8ff8' |
      '#0fa9c9' |
      '#101010' |
      '#101341' |
      '#102044' |
      '#103F68' |
      '#104fca' |
      '#105B2F' |
      '#1061e3' |
      '#11021E' |
      '#117FC0' |
      '#121747' |
      '#134451' |
      '#1347E8' |
      '#136485' |
      '#136AAD' |
      '#1387C9' |
      '#13a0f6' |
      '#13bf99' |
      '#14c8ff' |
      '#152743' |
      '#1591ca' |
      '#15BDFF' |
      '#16141A' |
      '#164b79' |
      '#1666af' |
      '#1693d4' |
      '#16b9ad' |
      '#181818' |
      '#183C87' |
      '#18578c' |
      '#186C9D' |
      '#199248' |
      '#1A1F36' |
      '#1A4199' |
      '#1AAB9B' |
      '#1B75BC' |
      '#1BEEF4' |
      '#1C98F7' |
      '#1D1D1D' |
      '#1D9AD7' |
      '#1E1E1E' |
      '#1E1F25' |
      '#1EB5FA' |
      '#1F4C9F' |
      '#1c1c1c' |
      '#1c347a' |
      '#1e252c' |
      '#1fc5c9' |
      '#201A2D' |
      '#2080a2' |
      '#20EE82' |
      '#20c5d3' |
      '#21AF67' |
      '#21a5de' |
      '#222' |
      '#22B573' |
      '#23292F' |
      '#23336F' |
      '#23B852' |
      '#23BEE2' |
      '#242424' |
      '#242D3D' |
      '#24DD7B' |
      '#252525' |
      '#25AAE1' |
      '#25AAE3' |
      '#262626' |
      '#2683FF' |
      '#26A17B' |
      '#272731' |
      '#272d63' |
      '#27323a' |
      '#292929' |
      '#292A2E' |
      '#2A2A2A' |
      '#2A3069' |
      '#2A5284' |
      '#2A5ADA' |
      '#2AB0FD' |
      '#2B1544' |
      '#2B2E7F' |
      '#2B61D1' |
      '#2B6680' |
      '#2B77B3' |
      '#2C3E50' |
      '#2CD3E1' |
      '#2D4692' |
      '#2D9CDB' |
      '#2DAEE4' |
      '#2DC4E7' |
      '#2E3148' |
      '#2E6BF6' |
      '#2E9AD0' |
      '#2EBAC6' |
      '#2ED6A1' |
      '#2FD2E5' |
      '#2aabe4' |
      '#2ab6f6' |
      '#2ab8e6' |
      '#2b5ebb' |
      '#2c398f' |
      '#2c76b7' |
      '#2d2d2d' |
      '#2d475b' |
      '#2d9cdb' |
      '#2f2f2f' |
      '#302C2C' |
      '#30367a' |
      '#3058A6' |
      '#3089F2' |
      '#30c0f2' |
      '#3165D4' |
      '#31CB9E' |
      '#328332' |
      '#32a4be' |
      '#333' |
      '#3355B5' |
      '#338be5' |
      '#34318A' |
      '#343434' |
      '#34445B' |
      '#346fce' |
      '#347FFB' |
      '#348f8d' |
      '#3555f9' |
      '#35A5F3' |
      '#35A7DF' |
      '#35BAEB' |
      '#36B0F3' |
      '#36a9cf' |
      '#372D2C' |
      '#374851' |
      '#377E96' |
      '#37DCD8' |
      '#37e8a3' |
      '#383939' |
      '#384182' |
      '#396a28' |
      '#398260' |
      '#399b32' |
      '#3A8CBD' |
      '#3AB03E' |
      '#3B5998' |
      '#3C80F1' |
      '#3C87C7' |
      '#3CB054' |
      '#3D58B0' |
      '#3E73C4' |
      '#3EFFFF' |
      '#3F43AD' |
      '#3FBADF' |
      '#3c5be0' |
      '#404040' |
      '#40649F' |
      '#408af1' |
      '#4096d0' |
      '#4099CD' |
      '#417BA4' |
      '#418bca' |
      '#42C1CA' |
      '#434247' |
      '#436697' |
      '#4392cd' |
      '#443F54' |
      '#444fa1' |
      '#454545' |
      '#4700C2' |
      '#47B95C' |
      '#48B254' |
      '#48BEFF' |
      '#49c1bf' |
      '#4A90E2' |
      '#4BA2F2' |
      '#4C6F8C' |
      '#4FA784' |
      '#4ba2f2' |
      '#4c5a95' |
      '#4c6bae' |
      '#4f7aa2' |
      '#50479E' |
      '#504C4C' |
      '#516AFF' |
      '#5244D4' |
      '#5411B3' |
      '#5546FF' |
      '#5592D7' |
      '#56428E' |
      '#565656' |
      '#56C9E9' |
      '#56f4f1' |
      '#5783CB' |
      '#57beea' |
      '#58BF00' |
      '#5942CC' |
      '#598182' |
      '#5B6DEE' |
      '#5DF' |
      '#5E4778' |
      '#5F45BA' |
      '#5FCDF9' |
      '#5bc1d4' |
      '#602A52' |
      '#60e4dd' |
      '#610089' |
      '#622fba' |
      '#624dbf' |
      '#627EEA' |
      '#630' |
      '#6356ab' |
      '#64d1ff' |
      '#65CB8D' |
      '#666' |
      '#66F9A1' |
      '#67B2E8' |
      '#6916ff' |
      '#6F41D8' |
      '#6cde07' |
      '#70C9C9' |
      '#71C800' |
      '#7324F0' |
      '#74d269' |
      '#7543E3' |
      '#767DFF' |
      '#771a4e' |
      '#77C3B0' |
      '#786DBC' |
      '#7D59B5' |
      '#7F368A' |
      '#7b346e' |
      '#7f27ff' |
      '#8200FF' |
      '#82bd39' |
      '#8834FF' |
      '#895AF8' |
      '#8d181b' |
      '#8dc351' |
      '#8e9495' |
      '#939393' |
      '#964B9C' |
      '#96b73d' |
      '#98C23A' |
      '#9D01EB' |
      '#9d4bef' |
      '#A6E000' |
      '#A71435' |
      '#AA15DD' |
      '#B30D23' |
      '#B3BA00' |
      '#B49FFC' |
      '#B68900' |
      '#B8B8B8' |
      '#BFBBBB' |
      '#C3A634' |
      '#C91111' |
      '#C99705' |
      '#C9A35E' |
      '#CC1E46' |
      '#D21E2B' |
      '#D59143' |
      '#D65892' |
      '#DA1157' |
      '#DD0632' |
      '#DE3F6B' |
      '#DEC799' |
      '#E30613' |
      '#E4CE4D' |
      '#E53431' |
      '#E54C40' |
      '#E6007A' |
      '#E9570F' |
      '#EA0017' |
      '#EAB304' |
      '#EBA809' |
      '#ECB244' |
      '#ED1650' |
      '#EEC315' |
      '#EF0027' |
      '#F04086' |
      '#F19F13' |
      '#F1B32B' |
      '#F1CB60' |
      '#F2941B' |
      '#F3BA2F' |
      '#F4B731' |
      '#F4C257' |
      '#F4D029' |
      '#F5342E' |
      '#F5D100' |
      '#F5EB16' |
      '#F60' |
      '#F68922' |
      '#F6C054' |
      '#F70000' |
      '#F7931A' |
      '#F7931C' |
      '#F7931E' |
      '#F8C24A' |
      '#F90' |
      '#F93' |
      '#FA5836' |
      '#FAB431' |
      '#FB2EA3' |
      '#FBB413' |
      '#FBBF02' |
      '#FDA616' |
      '#FEC60D' |
      '#FEC807' |
      '#FEFDFC' |
      '#FEFFFE' |
      '#FEFFFF' |
      '#FF0060' |
      '#FF007A' |
      '#FF2D55' |
      '#FF4A4A' |
      '#FF5000' |
      '#FF8C00' |
      '#FF914D' |
      '#FFAA05' |
      '#FFAA5C' |
      '#FFD800' |
      '#FFF' |
      '#FFF300' |
      '#b2a3f6' |
      '#b50126' |
      '#b80000' |
      '#bc3fe0' |
      '#c1a05c' |
      '#c40e09' |
      '#c87035' |
      '#cfa967' |
      '#dcd6cc' |
      '#df1a14' |
      '#e5f300' |
      '#eac749' |
      '#ec1076' |
      '#ed1968' |
      '#ed79aa' |
      '#ef494d' |
      '#efb914' |
      '#f28f01' |
      '#f49352' |
      '#f49e00' |
      '#f4ae95' |
      '#f55749' |
      '#f58634' |
      '#f70808' |
      '#f7931a' |
      '#f80000' |
      '#f89022' |
      '#f9c011' |
      '#faa00d' |
      '#fcc339' |
      '#fd7a3d' |
      '#fd875e' |
      '#fdde6c' |
      '#fe5d86' |
      '#fec907' |
      '#fefefe' |
      '#ff1f43' |
      '#ff3a00' |
      '#ff3b81' |
      '#ff4081' |
      '#ff4314' |
      '#ff439b' |
      '#ffc018' |
      '#ffc04e' |
      '#ffd81b' |
      '#ffe600' |
      '#ffffff';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
