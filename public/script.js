const barChart = document.getElementById("bar-chart-container");

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        renderBars(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderBars(data) {
    const highestValue = Math.max(...data.map(item => item.amount));
    data.forEach(bar => {
        const pxValue = Math.floor(bar.amount * 3);
        barChart.innerHTML += `
        <div class="grid justify-items-center content-end gap-2 group">
            <span class="bg-dark_brown text-cream rounded-bars sm:w-[60px] w-[40px] sm:h-[35px] h-[25px] place-items-center grid group-hover:opacity-100 group-hover:left-0 transition-all opacity-0 relative -left-5">$${bar.amount}</span>
            <div style="height: ${pxValue}px;" class="${highestValue === bar.amount ? "bg-cyan" : "bg-soft_red"} hover:bg-opacity-50 transition-opacity sm:w-[50px] w-[30px] rounded-bars cursor-pointer animate-wiggle"></div>
            <p class="text-center text-medium_brown">${bar.day}</p>
        </div>
        `
    });
}

fetchData()