function type(o) {
    return (o == null) ? "null" : (typeof o);
}

loop: for (var j = 1; j < 6; j++) {
    document.write("<br>" + j + ":");
    for (var i = 1; i < 6; i++) {
        if (i == 3) continue loop;    //��i=3��ʱ������ѭ��loop
        document.write(i);
    }
}
