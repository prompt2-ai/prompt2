import AiDataMesh from "./AiDataMesh"

export default function LoginLeftSide() {
    return (
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg className="mr-2 h-8 w-8 fill-orange-300"
          version="1.0" 
          viewBox="0 0 31.997 29.728" 
          xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-63.926 -132.98)"><path d="m74.28 162.62c-1.5931-0.37797-2.7923-1.6491-3.1074-3.294-0.14961-0.78094-0.20506-0.82008-1.1997-0.84686-3.2541-0.0876-4.6447-2.9631-3.1249-6.4617 0.12434-0.28623 0.04483-0.45308-0.26729-0.56095-3.3269-1.1497-3.5954-6.0337-0.41319-7.515 0.58711-0.27329 0.7767-0.48648 0.66289-0.74543-1.5137-3.4444 0.08623-6.5591 3.3712-6.5628 0.64211-6.5e-4 0.79891-0.14583 1.3273-1.2282 1.4079-2.8839 4.8898-3.2634 6.8564-0.74719 0.65344 0.83605 1.2696 23.045 0.7017 25.293-0.43561 1.7247-2.9357 3.1126-4.807 2.6687zm0.60418-1.8464c0-0.97951-0.09338-1.1931-0.71899-1.6446-1.4744-1.064-0.72928-3.1718 1.1213-3.1718 1.0235 0 1.7547 0.73222 1.7547 1.7571 0 0.65514-0.7112 1.6116-1.1983 1.6116-0.13181 0-0.23966 0.579-0.23966 1.2867 0 1.4378 0.14459 1.5268 1.3243 0.81509 1.7852-1.077 2.5387-12.395 0.82519-12.395-0.43247 0-0.78373 0.14552-0.86787 0.35955-0.4132 1.0511-2.3979 1.2206-3.0847 0.26348-1.4066-1.9603 1.3411-3.9975 2.8906-2.1432 1.3263 1.5872 1.7885 0.89187 1.7885-2.6907 0-3.2751 0-3.2751-2.9958-3.2751-1.6477 0-2.9958 0.0854-2.9958 0.18982 0 0.52042-1.0321 1.2138-1.8068 1.2138-1.7084 0-2.4773-2.0102-1.1567-3.0242 0.88871-0.68236 1.6905-0.61233 2.4842 0.21696 1.1095 1.1593 2.157 1.0071 2.157-0.31335 0-0.85281-0.09477-1.0573-0.59254-1.2787-1.1675-0.51926-1.0878-2.3635 0.12866-2.9775 2.0197-1.0195 3.7296 1.65 1.9019 2.969-1.579 1.1395-1.0343 2.3024 1.0785 2.3024 1.8596 0 2.5719-2.4168 1.4706-4.9896-1.3055-3.0498-5.5802-2.5576-6.1233 0.7051-0.14857 0.89242-0.14857 0.89242-1.5057 0.91315-3.9367 0.0601-4.9934 4.8556-1.3943 6.3272 1.5663 0.64046 2.6396 2.0021 2.6396 3.3489 0 1.0502-0.62456 0.91587-0.80287-0.1726-0.38933-2.3765-3.2452-3.3646-5.1657-1.7872-2.2586 1.8551-0.828 5.7145 2.1182 5.7145 0.78248 0 1.0502 0.59832 0.3801 0.84933-2.3116 0.86587-1.2001 5.9349 1.3014 5.9349 0.57132 0 0.2489-1.4523-0.46742-2.1054-1.6792-1.5311-0.09974-3.9423 1.9159-2.9249 1.2126 0.6121 1.2491 2.5256 0.05798 3.0389-0.94149 0.40573-0.77788 2.0805 0.18313 1.8745 0.71807-0.15395 0.71899-0.15276 0.71899 0.92878 0 1.3482 0.51301 2.3476 1.5095 2.9407 1.1743 0.69892 1.3664 0.60511 1.3664-0.66729zm8.5453 1.7278c-1.1197-0.39898-1.9232-1.1054-2.4203-2.128-0.52073-1.0711-0.56408-23.542-0.04778-24.748 1.4675-3.4283 6.5507-3.3846 7.6097 0.0655 0.25843 0.84195 0.33038 0.89161 1.4853 1.0251 2.9212 0.3377 4.6014 3.3575 3.278 5.8913-0.26584 0.50898-0.37886 0.95941-0.25114 1.001 3.7876 1.2324 3.7876 6.8096 0 8.042-0.12771 0.0416-0.0147 0.49199 0.25114 1.001 1.3808 2.6436-0.68939 5.947-3.74 5.968-0.68396 5e-3 -0.7612 0.084-0.89861 0.92278-0.36602 2.2342-3.0572 3.7467-5.2662 2.9596zm0.80164-1.7538c0-0.97616-0.11331-1.2623-0.74346-1.8774-1.1752-1.1471-0.4216-2.8973 1.2474-2.8973 1.6761 0 2.3776 1.746 1.1737 2.9212-0.96548 0.94241-1.1034 3.1501-0.17974 2.8777 1.3298-0.39213 2.4438-2.1141 2.2889-3.538-0.06492-0.59687-0.0066-0.65575 0.58703-0.59507 0.83631 0.0854 1.0336-1.6743 0.21611-1.9276-0.4475-0.13864-0.99502-1.0448-0.99502-1.6468 0-0.67481 1.0948-1.6006 1.8927-1.6006 1.669 0 2.4226 1.7503 1.2474 2.8973-1.5641 1.5268-0.82668 3.0005 0.80267 1.6041 1.5924-1.3647 1.6244-3.3129 0.08263-5.0269-0.77115-0.85732-0.7498-0.88828 0.7832-1.1353 1.1145-0.17958 2.3528-1.4172 2.539-2.5378 0.67732-4.0741-5.1503-5.4246-6.1802-1.4322-0.27866 1.0802-0.93185 1.4368-0.92251 0.50357 0.01506-1.5113 1.1544-2.8539 3.1852-3.7538 2.0073-0.88947 2.3371-3.4798 0.65249-5.1242-0.90745-0.88576-1.2585-0.9897-3.0309-0.89739-0.70002 0.0365-0.75572-0.0218-0.90748-0.9481-0.52436-3.2008-4.7778-3.7903-6.1445-0.85152-1.2573 2.7036-0.63621 5.0833 1.3268 5.0833 1.931 0 2.8135-1.5566 1.2616-2.2254-1.2645-0.54491-1.1527-2.5112 0.17343-3.0521 2.0517-0.83679 3.581 1.6901 1.8004 2.9751-1.1886 0.85775-1.0623 2.3024 0.20119 2.3024 0.74622 0 0.97123-0.10935 1.1902-0.57838 0.52949-1.1343 2.5648-0.95914 3.1386 0.27017 0.89415 1.9156-1.8053 3.3773-3.1468 1.704-1.9986-2.4928-6.2934-0.71108-6.3629 2.6396-0.07516 3.6257 0.37179 4.1695 2.0669 2.5148 1.1273-1.1004 3.1525-0.34895 3.1525 1.1697 0 1.5186-2.0252 2.27-3.1525 1.1697-1.854-1.8097-2.1201-1.2684-2.1201 4.3126 0 5.8497 0.28636 6.9221 2.0371 7.629 0.79234 0.3199 0.83882 0.26846 0.83882-0.92851z" strokeWidth=".6712"/></g></svg>
          Prompt2
        </div>
        <div className="relative z-20 mt-auto">
              <AiDataMesh />
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;
              This service has been invaluable, saving me countless hours and enabling me to deliver stunning workflows to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">P. Skarvelis</footer>
          </blockquote>
        </div>
      </div>
    )
}