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

    type backgroundType = 'circle' | 'rect' | 'button';

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
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
