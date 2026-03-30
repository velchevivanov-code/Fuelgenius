/**
 * FuelGenius v3.1 — Complete Edition
 * Theme toggle, CSV export, i18n, all features
 */

const TRANSLATIONS = {
    bg: {
        splash_subtitle:"Шофирай умно. Спестявай повече.", nav_calc:"Калкулатор", nav_trip:"Пътуване", nav_history:"История",
        calc_title:"Ново зареждане", calc_distance:"Изминати километри", calc_fuel:"Заредено гориво",
        calc_price:"Цена на литър (по избор)", calc_btn:"Изчисли разхода",
        unit_km:"км", unit_liters:"литра", unit_l100:"л/100км", currency:"лв",
        res_per100:"л/100км", res_cost100:"лв/100км", res_total:"Общо лв", res_perkm:"лв/км",
        hero_label:"Еко рейтинг", save_btn:"💾 Запази записа",
        comp_first:"🎉 Първият ти запис! Добре дошъл!",comp_new:"📊 Нов запис",
        comp_better:"📉 Браво! Намали с {diff} л/100км ({percent}% по-добре)",
        comp_worse:"📈 Увеличи с {diff} л/100км ({percent}% повече)",
        comp_same:"📊 Същият разход",
        tip_critical:"<strong>⚠️ Внимание:</strong> Много висок разход! Провери гумите, филтъра и дали няма проблем.",
        tip_high:"<strong>💡 Съвет:</strong> Ускорявай плавно — агресивното шофиране вдига разхода с до 40%.",
        tip_above_avg:"<strong>💡 Съвет:</strong> Круиз контрол на магистрала = постоянна скорост = по-нисък разход.",
        tip_avg:"<strong>💡 Съвет:</strong> Провери налягането на гумите — ниско налягане = до 4% повече разход.",
        tip_great:"<strong>🌟 Браво!</strong> Сред най-икономичните шофьори си!",
        trip_title:"Планирай пътуване", trip_subtitle:"Изчисли разходите и раздели с приятели",
        trip_distance:"Разстояние", trip_consumption:"Разход", trip_price:"Цена на литър",
        trip_passengers:"Брой пътници", trip_use_avg:"📊 Ползвай моя среден",
        trip_calc_btn:"Изчисли пътуването", trip_fuel_needed:"Нужно гориво",
        trip_one_way:"Една посока", trip_per_person:"На човек", trip_round:"Отиване + Връщане", trip_liters:"л",
        stats_avg:"Среден разход", stats_spent:"Похарчено", stats_km:"Километри", stats_records:"Записи",
        history_title:"Записи", history_clear:"Изтрий всички", history_empty:"Няма записи",
        export_btn:"📥 Експорт CSV", export_empty:"Няма данни за експорт", export_done:"✅ CSV файлът е свален!",
        ad_placeholder:"Рекламно пространство",
        modal_delete_title:"Изтрий записа?", modal_delete_text:"Сигурен ли си?",
        modal_delete_specific:"Изтрий запис от {date} ({consumption} л/100км)?",
        modal_cancel:"Отказ", modal_confirm_delete:"Изтрий",
        toast_saved:"✅ Записът е запазен!", toast_calc_first:"Първо изчисли разхода",
        toast_cleared:"Историята е изтрита", toast_deleted:"Записът е изтрит",
        toast_avg_loaded:"Зареден среден разход", toast_no_data:"Няма записи",
        toast_no_valid:"Няма валидни записи", toast_nothing_clear:"Няма записи за изтриване",
        toast_invalid_distance:"Въведи валидно разстояние", toast_invalid_consumption:"Въведи валиден разход",
        toast_invalid_price:"Въведи валидна цена",
        val_required_distance:"Километри е задължително", val_required_fuel:"Гориво е задължително",
        val_must_positive:"{field} трябва да е положително",
        val_field_distance:"Километри", val_field_fuel:"Гориво",
        confirm_clear_all:"Изтрий ВСИЧКИ записи? Действието е необратимо.",
        toast_save_error:"Грешка при запазване",
        consent_saved:"Настройките за поверителност са запазени", consent_rejected:"Опционалните функции са изключени", consent_accepted:"Опционалните функции са разрешени"
    },
    en: {
        splash_subtitle:"Drive smart. Save more.", nav_calc:"Calculator", nav_trip:"Trip", nav_history:"History",
        calc_title:"New refuel", calc_distance:"Distance driven", calc_fuel:"Fuel added",
        calc_price:"Price per liter (optional)", calc_btn:"Calculate",
        unit_km:"km", unit_liters:"liters", unit_l100:"L/100km", currency:"$",
        res_per100:"L/100km", res_cost100:"$/100km", res_total:"Total $", res_perkm:"$/km",
        hero_label:"Eco rating", save_btn:"💾 Save entry",
        comp_first:"🎉 Your first entry! Welcome!",comp_new:"📊 New entry",
        comp_better:"📉 Great! Reduced by {diff} L/100km ({percent}% better)",
        comp_worse:"📈 Increased by {diff} L/100km ({percent}% more)",
        comp_same:"📊 Same as last time",
        tip_critical:"<strong>⚠️ Warning:</strong> Very high consumption! Check tires, air filter, and mechanical issues.",
        tip_high:"<strong>💡 Tip:</strong> Accelerate smoothly — aggressive driving increases fuel use by up to 40%.",
        tip_above_avg:"<strong>💡 Tip:</strong> Use cruise control on highways for steady speed and lower consumption.",
        tip_avg:"<strong>💡 Tip:</strong> Check tire pressure — low pressure increases consumption by up to 4%.",
        tip_great:"<strong>🌟 Excellent!</strong> You're among the most fuel-efficient drivers!",
        trip_title:"Plan a trip", trip_subtitle:"Calculate costs and split with friends",
        trip_distance:"Distance", trip_consumption:"Consumption", trip_price:"Price per liter",
        trip_passengers:"Passengers", trip_use_avg:"📊 Use my average",
        trip_calc_btn:"Calculate trip", trip_fuel_needed:"Fuel needed",
        trip_one_way:"One way", trip_per_person:"Per person", trip_round:"Round trip", trip_liters:"L",
        stats_avg:"Avg consumption", stats_spent:"Total spent", stats_km:"Kilometers", stats_records:"Records",
        history_title:"Records", history_clear:"Clear all", history_empty:"No records yet",
        export_btn:"📥 Export CSV", export_empty:"No data to export", export_done:"✅ CSV file downloaded!",
        ad_placeholder:"Ad space",
        modal_delete_title:"Delete entry?", modal_delete_text:"Are you sure?",
        modal_delete_specific:"Delete entry from {date} ({consumption} L/100km)?",
        modal_cancel:"Cancel", modal_confirm_delete:"Delete",
        toast_saved:"✅ Entry saved!", toast_calc_first:"Calculate first",
        toast_cleared:"History cleared", toast_deleted:"Entry deleted",
        toast_avg_loaded:"Average loaded", toast_no_data:"No records",
        toast_no_valid:"No valid records", toast_nothing_clear:"Nothing to clear",
        toast_invalid_distance:"Enter valid distance", toast_invalid_consumption:"Enter valid consumption",
        toast_invalid_price:"Enter valid price",
        val_required_distance:"Distance is required", val_required_fuel:"Fuel is required",
        val_must_positive:"{field} must be positive",
        val_field_distance:"Distance", val_field_fuel:"Fuel",
        confirm_clear_all:"Delete ALL records? This cannot be undone.",
        toast_save_error:"Error saving data",
        consent_saved:"Privacy choices saved", consent_rejected:"Optional features are disabled", consent_accepted:"Optional features are allowed"
    }
};
const LANG_CFG = {
    bg:{flag:"🇧🇬",code:"BG",currency:"лв",ph:"2.85"},
    en:{flag:"🇬🇧",code:"EN",currency:"$",ph:"1.65"}
};

let history=[], passengers=2, deleteIndex=-1, currentLang='en', currentTheme='dark';
const MAX_HISTORY_ENTRIES = 500;
const STORAGE_KEYS = { history:'fuelHistory', lang:'fuelLang', theme:'fuelTheme', consent:'fuelConsent' };
const APP_CONFIG = window.FUELGENIUS_CONFIG || {};
let consentState = { necessary:true, analytics:false, ads:false, status:'pending', updatedAt:null, version: APP_CONFIG.consent?.version || '1' };

// ===== i18n =====
function t(key,rep={}){
    let s=TRANSLATIONS[currentLang]?.[key]||TRANSLATIONS.en[key]||key;
    for(const[k,v] of Object.entries(rep)) s=s.replace(`{${k}}`,v);
    return s;
}
function applyI18n(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t(el.getAttribute('data-i18n'))});
    const cfg=LANG_CFG[currentLang];
    ['currencyUnit','tripCurrencyUnit'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=cfg.currency});
    ['price','tripPrice'].forEach(id=>{const el=document.getElementById(id);if(el)el.placeholder=cfg.ph});
    const c=cfg.currency;
    const e1=document.getElementById('resCost100Label'),e2=document.getElementById('resTotalLabel'),e3=document.getElementById('resPerKmLabel');
    if(e1)e1.textContent=`${c}/100${t('unit_km')}`;if(e2)e2.textContent=t('res_total');if(e3)e3.textContent=`${c}/${t('unit_km')}`;
    document.getElementById('langFlag').textContent=cfg.flag;
    document.getElementById('langCode').textContent=cfg.code;
    document.documentElement.lang=currentLang;
}
function detectLang(){const s=localStorage.getItem(STORAGE_KEYS.lang);if(s&&TRANSLATIONS[s])return s;return(navigator.language||'en').startsWith('bg')?'bg':'en'}
function toggleLang(){
    currentLang=currentLang==='bg'?'en':'bg';
    localStorage.setItem(STORAGE_KEYS.lang,currentLang);
    applyI18n();updateStats();updateHistoryList();
    if(!document.getElementById('results').classList.contains('hidden')&&window.tempResult){showComparison(window.tempResult.per100);showTip(window.tempResult.per100)}
}

// ===== THEME =====
function detectTheme(){return localStorage.getItem(STORAGE_KEYS.theme)||'dark'}
function applyTheme(theme){
    currentTheme=theme;
    document.documentElement.setAttribute('data-theme',theme);
    document.getElementById('themeIcon').textContent=theme==='dark'?'☀️':'🌙';
    document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0A0E1A':'#F4F7FA';
    localStorage.setItem(STORAGE_KEYS.theme,theme);
}
function toggleTheme(){applyTheme(currentTheme==='dark'?'light':'dark')}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
    currentLang=detectLang();
    applyTheme(detectTheme());
    applyI18n();
    try{const s=localStorage.getItem(STORAGE_KEYS.history);if(s){history=JSON.parse(s);history=history.filter(e=>e&&typeof e.per100==='number'&&!isNaN(e.per100)).slice(-MAX_HISTORY_ENTRIES)}}catch(e){history=[]}
    setTimeout(()=>{const sp=document.getElementById('splash');if(sp){sp.classList.add('fade-out');setTimeout(()=>sp.remove(),600)}},2200);
    setupNav();setupCalc();setupTrip();setupHistory();setupModal();
    document.getElementById('langToggle').addEventListener('click',toggleLang);
    document.getElementById('themeToggle').addEventListener('click',toggleTheme);
    document.getElementById('exportBtn').addEventListener('click',exportCSV);
    setupConsent();
    updateStats();updateHistoryList();positionNavIndicator();
});

// ===== CONSENT =====
function detectConsent(){
    try{
        const raw=localStorage.getItem(STORAGE_KEYS.consent);
        if(!raw) return {...consentState};
        const parsed=JSON.parse(raw);
        return {
            necessary:true,
            analytics:!!parsed.analytics,
            ads:!!parsed.ads,
            status:parsed.status||'saved',
            updatedAt:parsed.updatedAt||null,
            version: APP_CONFIG.consent?.version || parsed.version || '1'
        };
    }catch(e){
        return {...consentState};
    }
}
function persistConsent(state){
    consentState={...state, necessary:true, updatedAt:new Date().toISOString(), version: APP_CONFIG.consent?.version || state.version || '1'};
    localStorage.setItem(STORAGE_KEYS.consent, JSON.stringify(consentState));
    applyConsentUI();
}
function applyConsentUI(){
    const banner=document.getElementById('consentBanner');
    const adBanner=document.getElementById('adBanner');
    const analyticsToggle=document.getElementById('consentAnalyticsToggle');
    const adsToggle=document.getElementById('consentAdsToggle');
    if(analyticsToggle) analyticsToggle.checked=!!consentState.analytics;
    if(adsToggle) adsToggle.checked=!!consentState.ads;
    if(banner){
        const shouldShow=APP_CONFIG.consent?.enabled!==false && consentState.status==='pending';
        banner.classList.toggle('hidden', !shouldShow);
    }
    if(adBanner){
        const configured=APP_CONFIG.ads?.enabled && APP_CONFIG.ads?.bannerUnitId && !APP_CONFIG.ads.bannerUnitId.includes('xxxxxxxx');
        if(configured && consentState.ads){
            adBanner.innerHTML='<span>Ad slot configured. Load your Android wrapper banner here.</span>';
        }else if(APP_CONFIG.ads?.enabled){
            adBanner.innerHTML='<span>Ads configured but blocked until consent is granted.</span>';
        }else{
            adBanner.innerHTML='<span>Ad slot ready. Add your AdMob wrapper IDs in release-config.js.</span>';
        }
    }
}
function openConsentModal(){
    document.getElementById('consentModal').classList.remove('hidden');
    document.body.style.overflow='hidden';
    applyConsentUI();
}
function closeConsentModal(){
    document.getElementById('consentModal').classList.add('hidden');
    document.body.style.overflow='';
}
function saveConsentChoices(analytics, ads){
    persistConsent({ necessary:true, analytics:!!analytics, ads:!!ads, status:'saved', version: APP_CONFIG.consent?.version || '1' });
    closeConsentModal();
    showToast(t('consent_saved'),'success');
    maybeInitializeOptionalServices();
}
function acceptAllConsent(){
    persistConsent({ necessary:true, analytics:true, ads:true, status:'saved', version: APP_CONFIG.consent?.version || '1' });
    showToast(t('consent_accepted'),'success');
    maybeInitializeOptionalServices();
}
function rejectOptionalConsent(){
    persistConsent({ necessary:true, analytics:false, ads:false, status:'saved', version: APP_CONFIG.consent?.version || '1' });
    closeConsentModal();
    showToast(t('consent_rejected'),'info');
}
function maybeInitializeOptionalServices(){
    window.FUELGENIUS_RUNTIME = {
        analyticsAllowed: !!consentState.analytics && !!APP_CONFIG.analytics?.enabled && !!APP_CONFIG.analytics?.measurementId && !APP_CONFIG.analytics.measurementId.includes('XXXXXXXX'),
        adsAllowed: !!consentState.ads && !!APP_CONFIG.ads?.enabled && !!APP_CONFIG.ads?.bannerUnitId && !APP_CONFIG.ads.bannerUnitId.includes('xxxxxxxx')
    };
    applyConsentUI();
}
function setupConsent(){
    consentState=detectConsent();
    document.getElementById('managePrivacyBtn')?.addEventListener('click', openConsentModal);
    document.getElementById('consentCustomizeBtn')?.addEventListener('click', openConsentModal);
    document.getElementById('consentAcceptBtn')?.addEventListener('click', acceptAllConsent);
    document.getElementById('consentRejectBtn')?.addEventListener('click', rejectOptionalConsent);
    document.getElementById('consentCloseBtn')?.addEventListener('click', closeConsentModal);
    document.getElementById('consentSaveBtn')?.addEventListener('click', ()=>saveConsentChoices(
        document.getElementById('consentAnalyticsToggle').checked,
        document.getElementById('consentAdsToggle').checked
    ));
    document.querySelector('#consentModal .modal-bg')?.addEventListener('click', closeConsentModal);
    maybeInitializeOptionalServices();
    applyConsentUI();
}

// ===== NAV =====
function setupNav(){
    document.querySelectorAll('.nav-pill').forEach(btn=>{
        btn.addEventListener('click',()=>{
            document.querySelectorAll('.nav-pill').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
            document.getElementById(btn.dataset.tab).classList.add('active');
            positionNavIndicator();
            if(btn.dataset.tab==='history'){updateStats();updateHistoryList()}
        });
    });
}
function positionNavIndicator(){
    const pills=[...document.querySelectorAll('.nav-pill')];
    const idx=pills.findIndex(p=>p.classList.contains('active'));
    const ind=document.getElementById('navIndicator');
    if(ind&&idx>=0){ind.style.transform=`translateX(${idx*100}%)`;ind.style.width=`calc(${100/pills.length}% - 4px)`}
}

// ===== CALCULATOR =====
function setupCalc(){
    document.getElementById('calculateBtn').addEventListener('click',calculate);
    document.getElementById('saveBtn').addEventListener('click',saveEntry);
    ['distance','fuel','price'].forEach(id=>{document.getElementById(id).addEventListener('input',()=>clearErr(id))});
}
function clearErr(id){const e=document.getElementById(id+'Error');if(e){e.textContent='';e.classList.remove('visible')}document.getElementById(id).closest('.input-wrap').classList.remove('error')}
function showErr(id,msg){const e=document.getElementById(id+'Error');if(e){e.textContent=msg;e.classList.add('visible')}document.getElementById(id).closest('.input-wrap').classList.add('error')}

function calculate(){
    clearErr('distance');clearErr('fuel');
    const dv=document.getElementById('distance').value,fv=document.getElementById('fuel').value,pv=document.getElementById('price').value;
    let ok=true;
    if(!dv){showErr('distance',t('val_required_distance'));ok=false}
    else if(isNaN(parseFloat(dv))||parseFloat(dv)<=0){showErr('distance',t('val_must_positive',{field:t('val_field_distance')}));ok=false}
    if(!fv){showErr('fuel',t('val_required_fuel'));ok=false}
    else if(isNaN(parseFloat(fv))||parseFloat(fv)<=0){showErr('fuel',t('val_must_positive',{field:t('val_field_fuel')}));ok=false}
    if(!ok)return;

    const distance=parseFloat(dv),fuel=parseFloat(fv),price=parseFloat(pv)||0;
    const per100=(fuel/distance)*100,totalCost=price>0?fuel*price:0,cost100=price>0?per100*price:0,perKm=price>0?totalCost/distance:0;
    window.tempResult={distance,fuel,price,per100:Math.round(per100*100)/100,totalCost:Math.round(totalCost*100)/100,date:new Date().toISOString()};
    updateHeroGauge(per100);
    document.getElementById('per100').textContent=per100.toFixed(2);
    document.getElementById('cost100').textContent=price>0?cost100.toFixed(2):'--';
    document.getElementById('totalCost').textContent=price>0?totalCost.toFixed(2):'--';
    document.getElementById('perKm').textContent=price>0?perKm.toFixed(3):'--';
    showComparison(per100);showTip(per100);
    const res=document.getElementById('results');res.classList.remove('hidden');res.scrollIntoView({behavior:'smooth',block:'start'});
}
function updateHeroGauge(c){
    const fill=document.getElementById('heroFill'),val=document.getElementById('heroValue');
    const circ=2*Math.PI*85;
    let pct;if(c<=4)pct=100;else if(c<=5)pct=90;else if(c<=6)pct=78;else if(c<=7)pct=65;else if(c<=8)pct=52;else if(c<=10)pct=35;else if(c<=12)pct=20;else pct=10;
    fill.style.strokeDashoffset=circ-(pct/100)*circ;val.textContent=c.toFixed(1);
}
function showComparison(cur){
    const comp=document.getElementById('comparison');
    if(!history.length){comp.className='info-strip';comp.innerHTML=t('comp_first');return}
    const last=history[history.length-1];
    if(!last||typeof last.per100!=='number'){comp.className='info-strip';comp.innerHTML=t('comp_new');return}
    const diff=cur-last.per100,pct=Math.abs((diff/last.per100)*100).toFixed(1);
    if(diff<-0.1){comp.className='info-strip positive';comp.innerHTML=t('comp_better',{diff:Math.abs(diff).toFixed(2),percent:pct})}
    else if(diff>0.1){comp.className='info-strip negative';comp.innerHTML=t('comp_worse',{diff:diff.toFixed(2),percent:pct})}
    else{comp.className='info-strip';comp.innerHTML=t('comp_same')}
}
function showTip(c){
    const tip=document.getElementById('tip');
    if(c>12)tip.innerHTML=t('tip_critical');else if(c>10)tip.innerHTML=t('tip_high');
    else if(c>8)tip.innerHTML=t('tip_above_avg');else if(c>6)tip.innerHTML=t('tip_avg');
    else tip.innerHTML=t('tip_great');
}
function saveEntry(){
    if(!window.tempResult){showToast(t('toast_calc_first'),'error');return}
    history.push(window.tempResult);saveData();window.tempResult=null;
    document.getElementById('distance').value='';document.getElementById('fuel').value='';document.getElementById('price').value='';
    document.getElementById('results').classList.add('hidden');
    document.getElementById('heroFill').style.strokeDashoffset=534;document.getElementById('heroValue').textContent='--';
    updateStats();updateHistoryList();showToast(t('toast_saved'),'success');
}

// ===== TRIP =====
function setupTrip(){
    document.getElementById('calcTripBtn').addEventListener('click',calcTrip);
    document.getElementById('useAvgBtn').addEventListener('click',useAvg);
    document.querySelectorAll('.pass-chip').forEach(btn=>{
        btn.addEventListener('click',()=>{
            document.querySelectorAll('.pass-chip').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');passengers=btn.dataset.val==='5'?5:parseInt(btn.dataset.val);
            if(!document.getElementById('tripResults').classList.contains('hidden'))calcTrip();
        });
    });
}
function calcTrip(){
    const d=parseFloat(document.getElementById('tripDist').value),c=parseFloat(document.getElementById('tripCons').value),p=parseFloat(document.getElementById('tripPrice').value);
    if(!d||d<=0){showToast(t('toast_invalid_distance'),'error');return}
    if(!c||c<=0){showToast(t('toast_invalid_consumption'),'error');return}
    if(!p||p<=0){showToast(t('toast_invalid_price'),'error');return}
    const cur=LANG_CFG[currentLang].currency,fuel=(d*c)/100,total=fuel*p,pp=total/passengers,rt=total*2;
    document.getElementById('tripFuel').textContent=`${fuel.toFixed(1)} ${t('trip_liters')}`;
    document.getElementById('tripOne').textContent=`${total.toFixed(2)} ${cur}`;
    document.getElementById('tripPerson').textContent=`${pp.toFixed(2)} ${cur}`;
    document.getElementById('tripRound').textContent=`${rt.toFixed(2)} ${cur}`;
    const res=document.getElementById('tripResults');res.classList.remove('hidden');res.scrollIntoView({behavior:'smooth'});
}
function useAvg(){
    if(!history.length){showToast(t('toast_no_data'),'error');return}
    const v=history.filter(e=>e&&typeof e.per100==='number'&&!isNaN(e.per100));
    if(!v.length){showToast(t('toast_no_valid'),'error');return}
    document.getElementById('tripCons').value=(v.reduce((s,e)=>s+e.per100,0)/v.length).toFixed(1);
    showToast(t('toast_avg_loaded'),'success');
}

// ===== HISTORY =====
function setupHistory(){
    document.getElementById('clearBtn').addEventListener('click',()=>{
        if(!history.length){showToast(t('toast_nothing_clear'),'error');return}
        if(confirm(t('confirm_clear_all'))){history=[];saveData();updateStats();updateHistoryList();showToast(t('toast_cleared'),'success')}
    });
}
function setupModal(){
    document.getElementById('cancelDelete').addEventListener('click',closeModal);
    document.getElementById('confirmDelete').addEventListener('click',confirmDel);
    document.querySelector('.modal-bg').addEventListener('click',closeModal);
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
}
function openModal(idx){
    deleteIndex=idx;const e=history[idx],d=new Date(e.date);
    document.getElementById('deleteModalText').textContent=t('modal_delete_specific',{date:`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`,consumption:e.per100.toFixed(2)});
    document.getElementById('deleteModal').classList.remove('hidden');document.body.style.overflow='hidden';
}
function closeModal(){deleteIndex=-1;document.getElementById('deleteModal').classList.add('hidden');document.body.style.overflow=''}
function confirmDel(){
    if(deleteIndex>=0&&deleteIndex<history.length){history.splice(deleteIndex,1);saveData();updateStats();updateHistoryList();showToast(t('toast_deleted'),'success')}
    closeModal();
}
window.deleteEntry=function(idx){openModal(idx)};

// ===== CSV EXPORT =====
function exportCSV(){
    if(!history.length){showToast(t('export_empty'),'error');return}
    const isEN=currentLang==='en';
    const header=isEN?'Date,Distance (km),Fuel (L),L/100km,Price/L,Total Cost':'Дата,Разстояние (км),Гориво (л),л/100км,Цена/л,Общо';
    const rows=history.map(e=>{
        const d=new Date(e.date);
        const ds=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        return `${ds},${e.distance},${e.fuel},${e.per100},${e.price||0},${e.totalCost||0}`;
    });
    const csv='\uFEFF'+header+'\n'+rows.join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=`FuelGenius_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
    showToast(t('export_done'),'success');
}

// ===== DATA =====
function saveData(){try{history=history.slice(-MAX_HISTORY_ENTRIES);localStorage.setItem(STORAGE_KEYS.history,JSON.stringify(history))}catch(e){showToast(t('toast_save_error'),'error')}}
function updateStats(){
    const v=history.filter(e=>e&&typeof e.per100==='number'&&!isNaN(e.per100));
    if(!v.length){document.getElementById('avgCons').textContent='--';document.getElementById('totalSpent').textContent='--';document.getElementById('totalKm').textContent='--';document.getElementById('totalRecs').textContent='0';return}
    document.getElementById('avgCons').textContent=(v.reduce((s,e)=>s+e.per100,0)/v.length).toFixed(1);
    document.getElementById('totalSpent').textContent=Math.round(v.reduce((s,e)=>s+(e.totalCost||0),0));
    document.getElementById('totalKm').textContent=Math.round(v.reduce((s,e)=>s+(e.distance||0),0));
    document.getElementById('totalRecs').textContent=v.length;
}
function updateHistoryList(){
    const list=document.getElementById('historyList');
    if(!history.length){list.innerHTML=`<div class="empty-state"><div class="empty-icon">📝</div><p>${t('history_empty')}</p></div>`;return}
    const cur=LANG_CFG[currentLang].currency;
    list.innerHTML=[...history].map((e,i)=>({e,i})).reverse().slice(0,50).map(({e,i})=>{
        const d=new Date(e.date),ds=`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
        const p=typeof e.per100==='number'?e.per100.toFixed(2):'--';
        const cost=e.totalCost>0?`${Math.round(e.totalCost)} ${cur}`:'';
        return `<div class="h-item"><div class="h-left"><div class="h-icon">⛽</div><div><div class="h-km">${e.distance||'--'} ${t('unit_km')}</div><div class="h-date">${ds} · ${e.fuel||'--'} ${t('trip_liters')}</div></div></div><div class="h-right"><div><div class="h-cons">${p}</div><div class="h-cost">${cost}</div></div><button class="h-del" onclick="deleteEntry(${i})" title="${t('modal_confirm_delete')}">✕</button></div></div>`;
    }).join('');
}

// ===== TOAST =====
function showToast(msg,type='info'){
    const c=document.getElementById('toasts'),el=document.createElement('div');
    el.className=`toast ${type}`;el.textContent=msg;c.appendChild(el);
    requestAnimationFrame(()=>el.classList.add('visible'));
    setTimeout(()=>{el.classList.remove('visible');el.classList.add('hiding');setTimeout(()=>el.remove(),300)},3000);
}

// ===== SERVICE WORKER =====
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{})})}
